const Finance = require("../Models/finance.model.js");
const Farm = require("../Models/farm.model.js");

// Create finance record for a farm
// const createFinance = async (req, res) => {
//   try {
//     const { farm } = req.body;

//     console.log("My farm id is which is going to be created : ", req.body);

//     // Check if the farm exists
//     const existingFarm = await Farm.findById(farm);
//     if (!existingFarm)
//       return res.status(404).json({ message: "Farm not found" });

//     const finance = new Finance({
//       farm,
//       transactions: [],
//       totalExpenses: 0,
//       totalRevenue: 0,
//     });

//     await finance.save();

//     // Link finance to farm
//     existingFarm.finances = finance._id;
//     await existingFarm.save();

//     res.status(201).json(finance);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
const createFinance = async (req, res) => {
  try {
    const { farm } = req.body;

    console.log("My farm id is which is going to be created : ", farm);

    // Check if the farm exists
    const existingFarm = await Farm.findById(farm);
    if (!existingFarm) {
      return res.status(404).json({ message: "Farm not found" });
    }

    // Check if finance already exists for this farm
    if (existingFarm.finances) {
      return res
        .status(400)
        .json({ message: "Finance already exists for this farm" });
    }

    // Create finance entry
    const finance = new Finance({
      farm,
      transactions: [],
      totalExpenses: 0,
      totalRevenue: 0,
    });

    await finance.save();

    // Link finance to farm
    existingFarm.finances = finance._id;
    await existingFarm.save();

    res.status(201).json(finance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get finance details by farm ID
const getFinanceByFarm = async (req, res) => {
  try {
    console.log("My farm id is : ", req.params.farmId);
    const finance = await Finance.findOne({ farm: req.params.farmId });

    if (!finance)
      return res.status(404).json({ message: "Finance record not found" });

    res.status(200).json(finance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a transaction (expense/revenue)
const addTransaction = async (req, res) => {
  try {
    const { type, amount, description } = req.body;

    console.log("My type is : ", type);
    console.log("My amount is : ", amount);
    console.log("My description is : ", description);

    console.log("My finance id is : ", req.params.financeId);

    const finance = await Finance.findById(req.params.financeId);
    if (!finance)
      return res.status(404).json({ message: "Finance record not found" });

    finance.transactions.push({ type, amount, description });

    // Update totals
    if (type === "Expense") {
      finance.totalExpenses += amount;
    } else if (type === "Revenue") {
      finance.totalRevenue += amount;
    }

    await finance.save();
    res.status(200).json({ message: "Transaction added", finance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
  try {
    const finance = await Finance.findById(req.params.financeId);
    if (!finance)
      return res.status(404).json({ message: "Finance record not found" });

    const transaction = finance.transactions.id(req.params.transactionId);
    if (!transaction)
      return res.status(404).json({ message: "Transaction not found" });

    // Adjust totals before removing
    if (transaction.type === "Expense") {
      finance.totalExpenses -= transaction.amount;
    } else if (transaction.type === "Revenue") {
      finance.totalRevenue -= transaction.amount;
    }

    transaction.remove();
    await finance.save();

    res.status(200).json({ message: "Transaction deleted", finance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all transactions for a farm's finance
const getTransactions = async (req, res) => {
  try {
    const finance = await Finance.findById(req.params.financeId);
    if (!finance)
      return res.status(404).json({ message: "Finance record not found" });

    res.status(200).json(finance.transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get total expenses and revenue
const getFinancialSummary = async (req, res) => {
  try {
    const finance = await Finance.findById(req.params.financeId);
    if (!finance)
      return res.status(404).json({ message: "Finance record not found" });

    res.status(200).json({
      totalExpenses: finance.totalExpenses,
      totalRevenue: finance.totalRevenue,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFinance,
  getFinanceByFarm,
  addTransaction,
  deleteTransaction,
  getTransactions,
  getFinancialSummary,
};
