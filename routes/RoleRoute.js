const express = require("express");
const {
  getAllRole,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} = require("../controllers/RoleController.js");

const router = express.Router();

router.get("/role", getAllRole);
router.get("/role/:id", getRoleById);
router.post("/role", createRole);
router.patch("/role/:id", updateRole);
router.delete("/role/:id", deleteRole);

module.exports = router;
