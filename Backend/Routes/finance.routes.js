const express = require("express");
const {
  addTransaction,
  createFinance,
  getFinanceByFarm,
  deleteTransaction,
  getTransactions,
  getFinancialSummary,
} = require("../Controllers/finance.controller.js");
const { checkAuthenticated } = require("../Middlewares/authentication.js");

const router = express.Router();

// Routes for finance management
router.post("/", checkAuthenticated, createFinance); // Create a new finance record
router.get("/:farmId", checkAuthenticated, getFinanceByFarm); // Get all finance records
router.get("/transactions/:financeId", checkAuthenticated, getTransactions); // Get a finance record by ID
router.get("/summary/:financeId", checkAuthenticated, getFinancialSummary); //
router.delete("/:financeId", checkAuthenticated, deleteTransaction); // Delete a finance record

// Add transactions (Expense/Revenue) to a finance record
router.post("/:financeId/transaction", checkAuthenticated, addTransaction);

module.exports = router;
