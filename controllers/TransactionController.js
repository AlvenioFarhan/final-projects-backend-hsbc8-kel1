const db = require("../models");
const Transaction = db.transaction;
const TransactionDetail = db.transaction_detail;

exports.getAllTransaction = async (req, res) => {
  try {
    const response = await Transaction.findAll({
      include: {
        model: TransactionDetail,
        as: "transaction_detail",
        include: {
          model: db.product,
          as: "product",
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getTransactionByUserId = async (req, res) => {
  try {
    const response = await Transaction.findAll({
      where: {
        userId: req.params.userId,
      },
      include: {
        model: TransactionDetail,
        as: "transaction_detail",
        include: {
          model: db.product,
          as: "product",
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getTransactionById = async (req, res) => {
  try {
    const response = await Transaction.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: TransactionDetail,
        as: "transaction_detail",
        include: {
          model: db.product,
          as: "product",
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.createTransaction = async (req, res) => {
  try {
    const transactionMeta = {
      total_items: 0,
      total: 0,
    };

    const bulkData = await Promise.all(
      req.body.map(async (data) => {
        const product = await db.product.findOne({
          where: {
            id: data.productId,
          },
        });

        if (!product) {
          return undefined;
        }

        transactionMeta.total_items += data.qty;
        transactionMeta.total += product.price * data.qty;

        return {
          productId: data.productId,
          qty: data.qty,
        };
      })
    );

    const transaction = await Transaction.create({
      // hardcode
      userId: "1",
      date: new Date(),
      total_items: transactionMeta.total_items,
      total: transactionMeta.total,
    });

    await TransactionDetail.bulkCreate(
      bulkData.map((element) => ({
        ...element,
        transactionId: transaction.id,
      }))
    );

    res.status(201).json({ msg: "Transaction created" });
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    await Transaction.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Transaction updated" });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    await Transaction.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Transaction deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
