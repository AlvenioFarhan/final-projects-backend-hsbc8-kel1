import {Sequelize} from "sequelize";
import db from "../config/database.js";
import User from "./UserModel.js";

const {DataTypes} = Sequelize;

const Role = db.define('role', {
    name: DataTypes.STRING,
}, {
    freezeTableName:true
});

Role.hasMany(User);

export default Role;

(async()=>{
    await db.sync();
})();