const jwt = require("jsonwebtoken");

exports.decodeJWT = (req) => {
  const { authorization } = req.headers;
  const token = authorization && authorization.split(" ")[1];
  let user;
  jwt.verify(token, "uniqlo-app", (err, callback) => {
    if (err) return false;
    user = callback.data;
    return true;
  });

  return user;
};
