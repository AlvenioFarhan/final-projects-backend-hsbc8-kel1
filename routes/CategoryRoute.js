const express = require("express");
const {
  getAllCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController.js");
const ADMIN_MIDDLEWARE = require("../middleware/admin.middleware.js");
const MEMBER_MIDDLEWARE = require("../middleware/member.middleware.js");

const router = express.Router();

router.get("/", [MEMBER_MIDDLEWARE], getAllCategory);
router.get("/:id", [MEMBER_MIDDLEWARE], getCategoryById);
router.post("/", [ADMIN_MIDDLEWARE], createCategory);
router.patch("/:id", [ADMIN_MIDDLEWARE], updateCategory);
router.delete("/:id", [ADMIN_MIDDLEWARE], deleteCategory);

module.exports = router;
