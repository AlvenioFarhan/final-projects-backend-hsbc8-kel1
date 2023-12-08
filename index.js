const express = require("express");
const cors = require("cors");
const ProductRoute = require("./routes/ProductRoute.js");
const CategoryRoute = require("./routes/CategoryRoute.js");
const UserRoute = require("./routes/UserRoute.js");
const RoleRoute = require("./routes/RoleRoute.js");

const app = express();

const authRoutes = require("./routes/AuthRoute.js");
const AUTH_MIDDLEWARE = require("./middleware/auth.middleware.js");

exports.router.use("/users", [AUTH_MIDDLEWARE], userRoutes);
exports.router.use("/auth", authRoutes);

app.use(cors());
app.use(express.json());
app.use(ProductRoute);
app.use(CategoryRoute);
app.use(UserRoute);
app.use(RoleRoute);

app.listen(5000, () =>
  console.log("Server up and running on port http://localhost:5000")
);
