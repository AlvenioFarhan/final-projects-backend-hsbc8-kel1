"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaction_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction_details.belongsTo(models.products, {
        foreignKey: "productId",
      });
    }
  }
  transaction_details.init(
    {
      qty: DataTypes.INTEGER,
      transactionId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "transaction_details",
      tableName: "transaction_details",
    }
  );
  return transaction_details;
};
