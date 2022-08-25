const express = require("express");
const router = express.Router();
const { validateAuth } = require("../middleware/auth");
const {
  editUser,
  promoteUser,
  demoteUser,
  deleteUser,
  getUsers,
} = require("../controllers/users");

router.put("/editUser", validateAuth, editUser);

router.put("/promote/:id", validateAuth, promoteUser);
router.put("/demote/:id", validateAuth, demoteUser);


router.delete("/:id", validateAuth, deleteUser);

router.get("/getAll", validateAuth, getUsers);

module.exports = router