const db = require("../models");
const User = db.user;

exports.getUsers = async (req, res) => {
  const users = await db.users.findAll({
    attributes: { exclude: ["password"] },
    include: [
      {
        model: db.roles,
      },
    ],
  });

  return res.status(200).json({
    message: "success",
    data: users,
  });
};

exports.getAllUser = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "User created" });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User updated" });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
