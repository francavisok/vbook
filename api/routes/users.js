const express = require("express");
const router = express.Router();
const { validateAuth, validateAdmin } = require("../middleware/auth");
const {
  editUser,
  promoteUser,
  demoteUser,
  deleteUser,
  getUsers,
} = require("../controllers/users");

router.put("/editUser", validateAuth, editUser);

router.put("/promote/:id", validateAuth, validateAdmin, promoteUser);

router.put("/demote/:id", validateAuth, validateAdmin, demoteUser);

router.delete("/:id", validateAuth, validateAdmin, deleteUser);

router.get("/getAll", validateAuth, validateAdmin, getUsers);

module.exports = router;
