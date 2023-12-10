const express = require("express");
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");
const ADMIN_MIDDLEWARE = require("../middleware/admin.middleware.js");

const router = express.Router();
router.get("/", [ADMIN_MIDDLEWARE], getAllUser);
router.get("/:id", getUserById);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
