import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Product = db.define('product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.BIGINT,
    qty: DataTypes.BIGINT,
}, {
    freezeTableName:true
});

export default Product;

(async()=>{
    await db.sync();
})();