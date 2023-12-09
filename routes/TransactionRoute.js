const express = require("express");
const {
  getAllTransaction,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactionByUserId,
} = require("../controllers/TransactionController.js");
const MEMBER_MIDDLEWARE = require("../middleware/member.middleware.js");
const ADMIN_MIDDLEWARE = require("../middleware/admin.middleware.js");
const router = express.Router();

router.get("/", [ADMIN_MIDDLEWARE], getAllTransaction);
router.get("/user", [MEMBER_MIDDLEWARE], getTransactionByUserId);
router.get("/:id", [ADMIN_MIDDLEWARE], getTransactionById);
router.post("/", [MEMBER_MIDDLEWARE], createTransaction);
router.patch("/:id", [ADMIN_MIDDLEWARE], updateTransaction);
router.delete("/:id", [ADMIN_MIDDLEWARE], deleteTransaction);

module.exports = router;
