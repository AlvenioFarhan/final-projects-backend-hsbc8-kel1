const express = require("express");
const {
  getAllCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController.js");

const router = express.Router();

router.get("/category", getAllCategory);
router.get("/category/:id", getCategoryById);
router.post("/category", createCategory);
router.patch("/category/:id", updateCategory);
router.delete("/category/:id", deleteCategory);

module.exports = router;
