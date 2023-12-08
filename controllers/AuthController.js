const db = require("../models");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  // ambil body
  const { email, password } = req.body;

  let message = "success";
  let data = null;

  //  cari user berdasarkan body
  await db.users
    .findOne({
      where: { email, password },
      raw: true,
      attributes: { exclude: "password" },
    })
    .then((res) => {
      if (!res) {
        // Ketika Datanya tidak ada
        message = "email or password doesn't match";
      } else {
        // Ketika Datanya ada
        // Daftarkan JWT
        var token = jwt.sign(
          {
            data: res,
          },
          "uniqlo-app", // SECRET KEY ( HARUS SAMA KETIKA AKAN VERIFY )
          { expiresIn: "1d" }
        );
        message = "success";
        data = token;
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return res.status(200).json({
    message,
    data,
  });
};

module.exports = {
  login,
};
