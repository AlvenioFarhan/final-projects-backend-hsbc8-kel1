const jwt = require("jsonwebtoken");

const AUTH_MIDDLEWARE = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  const token = authorization && authorization.split(" ")[1];
  const data = jwt.verify(token, "uniqlo-app", (err) => {
    if (err) return false;
    return true;
  });

  if (!data) {
    return res.status(401).json({
      message: "Unauthorized",
      data: null,
    });
  } else {
    next();
  }
};

module.exports = AUTH_MIDDLEWARE;
