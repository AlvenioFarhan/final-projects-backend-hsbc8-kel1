"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transactions.hasMany(models.transaction_details, {
        foreignKey: "transactionId",
      });
      transactions.belongsTo(models.users, {
        foreignKey: "userId",
      });
    }
  }
  transactions.init(
    {
      date: DataTypes.DATE,
      total_items: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "transactions",
      tableName: "transactions",
    }
  );
  return transactions;
};
