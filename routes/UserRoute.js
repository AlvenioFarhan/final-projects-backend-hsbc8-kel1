const express = require("express");
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

const router = express.Router();
router.get("/", getAllUser);
router.get("/:id", getUserById);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
