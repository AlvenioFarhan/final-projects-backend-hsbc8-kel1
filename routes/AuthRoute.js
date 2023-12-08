const { Router } = require("express");
const router = Router();

const { AuthControllers } = require("../controllers");

router.post("/login", AuthControllers.login);

module.exports = router;
