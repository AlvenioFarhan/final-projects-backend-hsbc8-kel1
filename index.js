const express = require("express");
const cors = require("cors");
const ProductRoute = require("./routes/ProductRoute.js");
const CategoryRoute = require("./routes/CategoryRoute.js");
const UserRoute = require("./routes/UserRoute.js");
const RoleRoute = require("./routes/RoleRoute.js");
const TransactionRoute = require("./routes/TransactionRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(ProductRoute);
app.use(CategoryRoute);
app.use(UserRoute);
app.use(RoleRoute);
app.use(TransactionRoute);

// BODY PARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () =>
  console.log("Server up and running on port http://localhost:5000")
);
