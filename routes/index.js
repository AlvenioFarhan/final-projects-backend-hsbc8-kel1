const { Router } = require("express");
const router = Router();

const authRoutes = require("./AuthRoute");
const userRoutes = require("./UserRoute");
const roleRoutes = require("./RoleRoute");
const categoryRoutes = require("./CategoryRoute");
const productRoutes = require("./ProductRoute");
const transactionRoutes = require("./TransactionRoute");
const ADMIN_MIDDLEWARE = require("../middleware/admin.middleware");

router.use("/auth", authRoutes);
router.use("/users", [ADMIN_MIDDLEWARE], userRoutes);
router.use("/roles", [ADMIN_MIDDLEWARE], roleRoutes);
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/transactions", transactionRoutes);

module.exports = router;
