const express = require("express");
const {
  getAllRole,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} = require("../controllers/RoleController.js");

const router = express.Router();

router.get("/", getAllRole);
router.get("/:id", getRoleById);
router.post("/", createRole);
router.patch("/:id", updateRole);
router.delete("/:id", deleteRole);

module.exports = router;
