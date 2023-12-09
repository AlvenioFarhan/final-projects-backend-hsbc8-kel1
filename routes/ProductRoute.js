const express = require("express");
const {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController.js");
const MEMBER_MIDDLEWARE = require("../middleware/member.middleware.js");
const ADMIN_MIDDLEWARE = require("../middleware/admin.middleware.js");

const router = express.Router();

router.get("/", [MEMBER_MIDDLEWARE], getAllProduct);
router.get("/:id", [MEMBER_MIDDLEWARE], getProductById);
router.post("/", [ADMIN_MIDDLEWARE], createProduct);
router.patch("/:id", [ADMIN_MIDDLEWARE], updateProduct);
router.delete("/:id", [ADMIN_MIDDLEWARE], deleteProduct);

module.exports = router;
