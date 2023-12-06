const express = require("express");
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/UserController.js");

const router = express.Router();

router.get("/user", getAllUser);
router.get("/user/:id", getUserById);
router.post("/user", createUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/users/auth", (req, res) => {
  return res.status(200).json({
    message: "Hello world!",
  });
});

module.exports = router;
