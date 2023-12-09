const db = require("../models");
const Category = db.categories;

exports.getAllCategory = async (req, res) => {
  try {
    const response = await Category.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const response = await Category.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.createCategory = async (req, res) => {
  try {
    await Category.create(req.body);
    res.status(201).json({ msg: "Category created" });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Category updated" });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Category deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
