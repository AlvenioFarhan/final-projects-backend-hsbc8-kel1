import express from "express";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import UserRoute from "./routes/UserRoute.js";
import RoleRoute from "./routes/RoleRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(ProductRoute);
app.use(CategoryRoute);
app.use(UserRoute);
app.use(RoleRoute);


app.listen(5000, ()=> console.log('Server up and running...'));