const express = require("express");
const {
  getAllTransaction,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactionByUserId,
} = require("../controllers/TransactionController.js");
const router = express.Router();

router.get("/transaction", getAllTransaction);
router.get("/transaction/:id", getTransactionById);
router.get("/transaction/user/:userId", getTransactionByUserId);
router.post("/transaction", createTransaction);
router.patch("/transaction/:id", updateTransaction);
router.delete("/transaction/:id", deleteTransaction);

module.exports = router;
