import {Sequelize} from "sequelize";
import db from "../config/database.js";
import Product from "./ProductModel.js";

const {DataTypes} = Sequelize;

const Category = db.define('category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
}, {
    freezeTableName:true
});

Category.hasMany(Product);

export default Category;

(async()=>{
    await db.sync();
})();