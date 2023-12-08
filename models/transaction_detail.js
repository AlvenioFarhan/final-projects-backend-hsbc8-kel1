"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaction_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction_detail.belongsTo(models.product, {
        foreignKey: "productId",
        as: "product",
      });
    }
  }
  transaction_detail.init(
    {
      qty: DataTypes.INTEGER,
      transactionId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "transaction_detail",
      tableName: "transaction_detail",
    }
  );
  return transaction_detail;
};
