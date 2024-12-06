const redis = require("redis");

const redisClient = redis.createClient();
const updateAllClients = require("./index");
async function main() {
  await redisClient.connect();
  while (true) {
    const response = await redisClient.brPop("order_queue", 0);
    const data = JSON.parse(response.element);

    const {
      userId,
      stockSymbol,
      quantity,
      price,
      stockType,
      ORDERBOOK,
      STOCK_BALANCES,
      INR_BALANCES,
      res,
    } = data;
    console.log(
      "--------------------------------------------------------------------",
      userId
    );
    let orderFulfilled = 0; // Track the quantity fulfilled
    let remainingQuantity = quantity; // Remaining quantity to fulfill
    console.log(userId);
    const orderBookEntry = ORDERBOOK[stockSymbol][stockType][price]; //this is orderbook details (total, orders)

    // Process orders in the order book
    const orders = orderBookEntry.orders;
    for (let seller in orders) {
      const sellerQuantity = orders[seller];

      if (remainingQuantity <= 0) break; // Stop if the order is fully fulfilled

      if (sellerQuantity > 0) {
        const fulfillQuantity = Math.min(sellerQuantity, remainingQuantity);
        orders[seller] -= fulfillQuantity;
        orderBookEntry.total -= fulfillQuantity;
        remainingQuantity -= fulfillQuantity;
        orderFulfilled += fulfillQuantity;

        const sellerEarnings = fulfillQuantity * price;
        console.log("1----------------");
        STOCK_BALANCES[seller][stockSymbol][stockType]["locked"] -=
          fulfillQuantity;
        console.log("2----------------");

        if (!INR_BALANCES[seller]) {
          INR_BALANCES[seller] = { balance: 0, locked: 0 }; // Initialize seller balance if not present
        }
        INR_BALANCES[seller].balance += sellerEarnings;
      }
    }
    // Update buyer's balances if the order was fulfilled
    if (orderFulfilled > 0) {
      STOCK_BALANCES[userId][stockSymbol][stockType].quantity += orderFulfilled;
      INR_BALANCES[userId].balance -= orderFulfilled * price;

      console.log(
        `Order fulfilled: ${orderFulfilled}, Remaining Quantity: ${remainingQuantity}`
      );
    }

    // If there's still remaining quantity after processing, add it to the order book to opposite type
    if (remainingQuantity > 0) {
      if (!orders[userId]) {
        orders[userId] = 0;
      }
      orders[userId] += remainingQuantity;
      //we need to add to no side if yes and vv
      if (stockType == "yes") {
        const priceToList = 1000 - price;
        ORDERBOOK[stockSymbol]["no"][priceToList]["total"] += remainingQuantity; //will belong to the buyer
        //if the user is no in orders entry of the opposiste side
        console.log(priceToList);
        console.log(ORDERBOOK[stockSymbol]["no"][priceToList]);
        console.log(ORDERBOOK[stockSymbol]["no"][priceToList]["orders"]);
        console.log(
          ORDERBOOK[stockSymbol]["no"][priceToList]["orders"][userId]
        );
        if (!ORDERBOOK[stockSymbol]["no"][priceToList]["orders"][userId]) {
          ORDERBOOK[stockSymbol]["no"][priceToList]["orders"][userId] =
            remainingQuantity;
        }
        ORDERBOOK[stockSymbol]["no"][priceToList]["orders"][userId] +=
          remainingQuantity;
      } else {
        const priceToList = 10 - price;
        ORDERBOOK[stockSymbol]["yes"][priceToList] += remainingQuantity;
      }

      INR_BALANCES[userId]["locked"] += remainingQuantity * price; //lock the money for the remaining quantity
      updateAllClients(ORDERBOOK); //updating the connected clients
      return res.status(200).json({
        message: `Partially fulfilled. Remaining ${remainingQuantity} added to the order book.`,
        stockBalance: STOCK_BALANCES[userId][stockSymbol],
        inrBalance: INR_BALANCES[userId],
      });
    }
    updateAllClients(ORDERBOOK); //updateing the connected clients
    res.status(200).json({
      message: "Order fully fulfilled.",
      stockBalance: STOCK_BALANCES[userId][stockSymbol],
      inrBalance: INR_BALANCES[userId],
    });
  }
}

module.exports = main;

// let orderFulfilled = 0; // Track the quantity fulfilled
// let remainingQuantity = quantity; // Remaining quantity to fulfill
// const orderBookEntry = ORDERBOOK[stockSymbol][stockType][price]; //this is orderbook details (total, orders)

// // Process orders in the order book
// const orders = orderBookEntry.orders;
// for (let seller in orders) {
//   const sellerQuantity = orders[seller];

//   if (remainingQuantity <= 0) break; // Stop if the order is fully fulfilled

//   if (sellerQuantity > 0) {
//     const fulfillQuantity = Math.min(sellerQuantity, remainingQuantity);
//     orders[seller] -= fulfillQuantity;
//     orderBookEntry.total -= fulfillQuantity;
//     remainingQuantity -= fulfillQuantity;
//     orderFulfilled += fulfillQuantity;

//     const sellerEarnings = fulfillQuantity * price;
//     console.log("1----------------");
//     STOCK_BALANCES[seller][stockSymbol][stockType]["locked"] -=
//       fulfillQuantity;
//     console.log("2----------------");

//     if (!INR_BALANCES[seller]) {
//       INR_BALANCES[seller] = { balance: 0, locked: 0 }; // Initialize seller balance if not present
//     }
//     INR_BALANCES[seller].balance += sellerEarnings;
//   }
// }
// // Update buyer's balances if the order was fulfilled
// if (orderFulfilled > 0) {
//   STOCK_BALANCES[userId][stockSymbol][stockType].quantity += orderFulfilled;
//   INR_BALANCES[userId].balance -= orderFulfilled * price;

//   console.log(
//     `Order fulfilled: ${orderFulfilled}, Remaining Quantity: ${remainingQuantity}`
//   );
// }

// // If there's still remaining quantity after processing, add it to the order book to opposite type
// if (remainingQuantity > 0) {
//   if (!orders[userId]) {
//     orders[userId] = 0;
//   }
//   orders[userId] += remainingQuantity;
//   //we need to add to no side if yes and vv
//   if (stockType == "yes") {
//     const priceToList = 1000 - price;
//     ORDERBOOK[stockSymbol]["no"][priceToList]["total"] += remainingQuantity; //will belong to the buyer
//     //if the user is no in orders entry of the opposiste side
//     console.log(priceToList);
//     console.log(ORDERBOOK[stockSymbol]["no"][priceToList]);
//     console.log(ORDERBOOK[stockSymbol]["no"][priceToList]["orders"]);
//     console.log(ORDERBOOK[stockSymbol]["no"][priceToList]["orders"][userId]);
//     if (!ORDERBOOK[stockSymbol]["no"][priceToList]["orders"][userId]) {
//       ORDERBOOK[stockSymbol]["no"][priceToList]["orders"][userId] =
//         remainingQuantity;
//     }
//     ORDERBOOK[stockSymbol]["no"][priceToList]["orders"][userId] +=
//       remainingQuantity;
//   } else {
//     const priceToList = 10 - price;
//     ORDERBOOK[stockSymbol]["yes"][priceToList] += remainingQuantity;
//   }

//   INR_BALANCES[userId]["locked"] += remainingQuantity * price; //lock the money for the remaining quantity
//   updateAllClients(ORDERBOOK); //updating the connected clients
//   return res.status(200).json({
//     message: `Partially fulfilled. Remaining ${remainingQuantity} added to the order book.`,
//     stockBalance: STOCK_BALANCES[userId][stockSymbol],
//     inrBalance: INR_BALANCES[userId],
//   });
// }
// updateAllClients(ORDERBOOK); //updateing the connected clients
// res.status(200).json({
//   message: "Order fully fulfilled.",
//   stockBalance: STOCK_BALANCES[userId][stockSymbol],
//   inrBalance: INR_BALANCES[userId],
// });
