const jwt = require("jsonwebtoken");

const MEMBER_MIDDLEWARE = async (req, res, next) => {
  const { authorization } = req.headers;
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

module.exports = MEMBER_MIDDLEWARE;
