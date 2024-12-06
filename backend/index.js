const onrampINR = require("./controllers/routeControllers/onrampINR.js");
const INR_BALANCES = require("./db/inmemory.js");

let ORDERBOOK = {
  //dummy for now
  BTC_USDT_10_OCT_2024_11_17: {
    yes: {
      950: {
        total: 10,
        orders: {
          user1: 3,
          user2: 4,
          user3: 3,
        },
      },
      900: {
        total: 10,
        orders: {
          user1: 3,
          user2: 4,
          user3: 3,
        },
      },
      850: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      800: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      750: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      700: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      650: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      600: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      550: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      500: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      450: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      400: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      350: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      300: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      250: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      200: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      150: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      100: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      50: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
    },
    no: {
      950: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      900: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      850: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      800: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      750: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      700: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      650: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      600: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      550: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      500: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      450: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      400: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      350: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      300: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      250: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      200: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      150: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      100: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
      50: {
        total: 0,
        orders: {
          user1: 0,
          user2: 0,
          user3: 0,
        },
      },
    },
  },
};
let STOCK_BALANCES = {
  user1: {
    BTC_USDT_10_OCT_2024_11_17: {
      yes: {
        quantity: 10,
        locked: 0,
      },
      no: {
        quantity: 0,
        locked: 0,
      },
    },
  },
  user2: {
    BTC_USDT_10_OCT_2024_11_17: {
      yes: {
        quantity: 1,
        locked: 0,
      },
      no: {
        quantity: 0,
        locked: 0,
      },
    },
  },
  user3: {
    BTC_USDT_10_OCT_2024_11_17: {
      yes: {
        quantity: 0,
        locked: 0,
      },
      no: {
        quantity: 0,
        locked: 0,
      },
    },
  },
  user4: {
    BTC_USDT_10_OCT_2024_11_17: {
      yes: {
        quantity: 0,
        locked: 0,
      },
      no: {
        quantity: 0,
        locked: 0,
      },
    },
  },
};
const express = require("express");
const redis = require("redis");

const redisClient = redis.createClient();

redisClient.connect();

const http = require("http");
const WebSocket = require("ws");
//imports export and instantiate

const app = express();
app.use(express.json()); //middleware to parse the incoming json to object , here will be used to exptract the route parameters
const server = http.createServer(app); //create server takes a cb inside
const wss = new WebSocket.Server({ server });
const wsclients = new Set(); // ws clients stored
wss.on("connection", (ws) => {
  console.log("a new client has just connected");
  wsclients.add(ws); //add the reference to each client object
  console.log(wsclients.size);
  ws.send("Welcome to our persistent server");
  ws.on("message", (message) => {
    //how to identify which message was from which client
    console.log(`message: ${message}`);
    console.log(`Message from client ${ws._socket.remoteAddress}: ${message}`); //that client info
  });
  ws.on("close", () => {
    console.log("a client disconnected");
    wsclients.delete(ws);
    console.log(wsclients.size);
  });
});
const updateAllClients = (data) => {
  wsclients.forEach((wsclient) => {
    wsclient.send(JSON.stringify(data));
  });
};
//create user endpoint with default balances to INR_BALANCES and adding to stock balnces also with default yes,no
app.get("/orderbook", (req, res) => {
  updateAllClients(ORDERBOOK); //updating orderbook just checking
  res.status(200).json({ ORDERBOOK });
});
app.post("/user/create/:userId", (req, res) => {
  try {
    const userId = req.params.userId;
    //find the user id in the array if matches throw the error to choose unique
    // console.log(uniqueUserIds);
    const match = uniqueUserIds.find((userId) => userId == userId);
    // console.log(match, userId);//debug
    if (match) {
      return res.json({ message: "please enter the unique user id" });
    }
    uniqueUserIds.push(userId);
    INR_BALANCES[userId] = { balance: 0, locked: 0 }; //adding to the INR_BALANCES //for dynamic key we use bracket notation
    console.log(INR_BALANCES);
    STOCK_BALANCES[userId] = {}; //adding empty stock balances
    res.json({ message: `user with id ${userId} created` });
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
});

//endpoint - get inr balances object
app.get("/balances/inr", (req, res) => {
  res.json({ INR_BALANCES });
});
//get stock balances
app.get("/balances/stock", (req, res) => {
  res.status(200).json({ STOCK_BALANCES });
});

//to create a new stock symbol, but how - whom to assign the symbol as in the stock balances
//create a market
app.post("/symbol/create/:stockSymbol", (req, res) => {
  const stockSymbol = req.params.stockSymbol;

  console.log(stockSymbol);
  const { userId } = req.body;
  STOCK_BALANCES[userId][stockSymbol] = {
    //notice how the new property is created in the object a new has to be added just simple as that
    yes: { quantity: 0, locked: 0 }, //we can check if the stock symbol exist in db or not
    no: { quantity: 0, locked: 0 },
  };
  res.status(200).json(STOCK_BALANCES);
});
//reset the orderbook, inrbalances and stock balances

//fuxnality endpoint from here

//get a user inr balance
app.get("/balances/inr/:userId", (req, res) => {
  const userId = req.params.userId;
  console.log(userId, INR_BALANCES[userId]);

  res.status(200).json({ userBalance: INR_BALANCES[userId] }); //why  res.status(200).json({INR_BALANCES.userId}) does not work
});

//onramp inr //add balance
app.post("/onramp/inr", onrampINR);

//get the stock balance
app.get("/balance/stock/:userId", (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  res.status(200).json({ "Your stock balances": STOCK_BALANCES[userId] });
});
app.post("/order/buy", async (req, res) => {
  const { userId, stockSymbol, quantity, price, stockType } = req.body;
  // console.log(userId, stockSymbol, quantity, price, stockType);

  // Check if user exists
  if (!INR_BALANCES[userId]) {
    return res.status(400).json({
      message:
        "You don't have an account, please create one before you can trade.",
    });
  }
  // Check if the market/stock symbol exists
  if (
    !ORDERBOOK[stockSymbol] ||
    !ORDERBOOK[stockSymbol][stockType] ||
    !ORDERBOOK[stockSymbol][stockType][price]
  ) {
    return res
      .status(404)
      .json({ message: "This market/stock symbol does not exist." });
  }

  // Check if the user has sufficient balance
  const totalCost = quantity * price;
  if (INR_BALANCES[userId].balance < totalCost) {
    return res
      .status(400)
      .json({ message: "Not enough balance, consider depositing first" });
  }
  await redisClient.lPush(
    "order_queue",
    JSON.stringify({
      userId,
      stockSymbol,
      quantity,
      price,
      stockType,
      ORDERBOOK,
      STOCK_BALANCES,
      INR_BALANCES,
    })
  );
  res.json({
    message: "order queued",
  });
});
//

app.post("/order/sell", (req, res) => {
  try {
    const { userId, stockSymbol, quantity, price, stockType } = req.body;
    //check if the user has suffice of that stock type to sell
    if (!ORDERBOOK[stockSymbol]) {
      return res.status(200).json({ message: "Market does not exist" });
    }
    if (STOCK_BALANCES[userId][stockSymbol][stockType]["quantity"] < quantity) {
      res.status(404).json({ message: "You don't have enough stocks to sell" });
    }
    //add to the orderbook and sub the stock quantity and lock that much quatity
    STOCK_BALANCES[userId][stockSymbol][stockType]["quantity"] -= quantity;
    STOCK_BALANCES[userId][stockSymbol][stockType]["locked"] += quantity;
    ORDERBOOK[stockSymbol][stockType][price]["total"] += quantity;
    console.log("hodjsfljs");
    if (!ORDERBOOK[stockSymbol][stockType][price]["orders"][userId]) {
      console.log("hodjsfljs");

      ORDERBOOK[stockSymbol][stockType][price]["orders"][userId] = quantity;
    }
    ORDERBOOK[stockSymbol][stockType][price]["orders"][userId] += quantity;
    updateAllClients(ORDERBOOK);
    res
      .status(200)
      .json({ message: "You sell order was added to the orderbook" });
  } catch (error) {
    res.status(200).json({ error });
  }
});

app.post("/reset", (req, res) => {
  (ORDERBOOK = {}), (INR_BALANCES = {}), (STOCK_BALANCES = {});
});
app.post("/trade/mint", () => {});
server.listen(3000, () => {
  console.log("connected on 3000");
});
module.exports = updateAllClients;

// apis - endpoints
//1. create a user  -[/user/create/:userId] we create a user entry in INR_BALANCES with unique id and deault 0 balances for both the irnr and locked
//2. create  a symbol - [/symbol/create/:stockSymbol] creating a new symbol in stock balances with the default yes and new entries matlab -
//3. get the orderbook  - returns the in memory orderbook that we have
//4. get stock balances - return the stock balnces object that we have
//5. get inr balances - retunr the object
//7. reset

//api - fucntionality
//1. user:get inr balance of requested user - /balance/inr/:userId
//2.user: the user onramp(deposit/recharge) - on the platform
//3. user:return the stock balnce a user has - give the user Id in params

//operations
//4. allow a user to buy the stock for yes - and will be added to orderbook
//5. place sell order for yes
//6. sim - buy the no stock and place sell order for no

//7. view orderbook for a given stock

//8. mint fresh tokens

//note -  order placed if suffice balance and orders match if ordebook can fulfill it
//bonus -  add ws for orderbook updates for user who subscribe it

// The YES Orders (Quantity) column shows the number of orders where participants believe the answer to the symbol’s question is “YES” at each price level.
// 	•	The NO Orders (Quantity) column shows the number of orders where participants believe the answer is “NO” at each price level.
// When a trader submits a “YES” or “NO” order, the system matches it against the opposite side at the best available price.
// 	•	If there’s no match, the order goes into the order book until another trader submits an order to match it.
