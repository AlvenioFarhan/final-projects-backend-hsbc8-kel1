const { Router } = require("express");
const router = Router();

const userRoutes = require("./UserRoute");
const authRoutes = require("./AuthRoute");
const AUTH_MIDDLEWARE = require("../middlewares/auth.middleware");

router.use("/user", [AUTH_MIDDLEWARE], userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
