const jwt = require("jsonwebtoken");

const ADMIN_MIDDLEWARE = async (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization && authorization.split(" ")[1];
  let user;
  const data = jwt.verify(token, "uniqlo-app", (err, callback) => {
    if (err) return false;
    user = callback.data;
    return true;
  });

  if (!data) {
    return res.status(401).json({
      message: "Unauthorized",
      data: null,
    });
  } else {
    if (!user.role.name.includes("administrator")) {
      return res.status(403).json({
        message: "Forbidden",
        data: null,
      });
    }
    next();
  }
};

module.exports = ADMIN_MIDDLEWARE;
