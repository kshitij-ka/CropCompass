import express from "express";
import {
  createFinanceRecord,
  getFinanceRecords,
  getFinanceById,
  updateFinance,
  deleteFinance,
  addTransaction,
} from "../controllers/financeController.js";
import { checkAuthenticated } from "../Middlewares/authentication.js";

const router = express.Router();

// Routes for finance management
router.post("/", checkAuthenticated, createFinanceRecord); // Create a new finance record
router.get("/", checkAuthenticated, getFinanceRecords); // Get all finance records
router.get("/:financeId", checkAuthenticated, getFinanceById); // Get a finance record by ID
router.put("/:financeId", checkAuthenticated, updateFinance); // Update finance record
router.delete("/:financeId", checkAuthenticated, deleteFinance); // Delete a finance record

// Add transactions (Expense/Revenue) to a finance record
router.post("/:financeId/transaction", checkAuthenticated, addTransaction);

export default router;
