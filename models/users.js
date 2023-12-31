"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.belongsTo(models.roles, { foreignKey: "roleId" });
      users.hasMany(models.transactions, {
        foreignKey: "userId",
      });
    }
  }
  users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      kodepos: DataTypes.INTEGER,
      tgl_lahir: DataTypes.DATE,
      jenkel: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "users",
      tableName: "users",
    }
  );
  return users;
};
