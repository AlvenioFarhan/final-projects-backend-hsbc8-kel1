"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction.hasMany(models.transaction_detail, {
        foreignKey: "transactionId",
        as: "transaction_detail",
      });
      transaction.belongsTo(models.user, {
        foreignKey: "userId",
      });
    }
  }
  transaction.init(
    {
      date: DataTypes.DATE,
      total_items: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "transaction",
      tableName: "transaction",
    }
  );
  return transaction;
};
