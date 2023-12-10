const express = require("express");
const cors = require("cors");
const router = require("./routes/index.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

// BODY PARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () =>
  console.log("Server up and running on port http://localhost:5000")
);
