// const INR_BALANCES = require("../../db/inmemory");
const { INR_BALANCES } = require("../../db/inmemory"); //this will destructure the INR_BALANCES import

const onrampINR = (req, res) => {
  try {
    const { amount, userId } = req.body;
    // console.log(amount, userId); //debug
    if (!amount) {
      return res.status(400).json({ message: "please enter a valid amount" });
    }
    //add to inr balances
    console.log(INR_BALANCES);
    const currentBalance = INR_BALANCES[userId].balance;
    INR_BALANCES[userId].balance = currentBalance + amount;
    res.status(200).json({
      message: "Balance added",
      "Your New balnce": INR_BALANCES[userId].balance,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
module.exports = onrampINR;
