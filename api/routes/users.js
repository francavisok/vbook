const express = require("express");
const router = express.router();
const { validateAuth } = require("../middleware/auth");
const {
  editUser,
  promoteUser,
  deleteUser,
  getUsers,
} = require("../controllers/users");

router.put("/editUser", validateAuth, editUser(req, res, next));

router.put("/promote/:id", validateAuth, promoteUser(req, res, next));

router.delete("/:id", validateAuth, deleteUser(req, res, next));

router.get("/getAll", validateAuth, getUsers(req, res, next));

module.exports = router