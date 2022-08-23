const express = require("express");
const router = express.router();
const { validateAuth } = require("../middleware/auth");
const {
  editUser,
  promoteUser,
  deleteUser,
  getUsers,
} = require("../controllers/users");

router.put("user/editUser", validateAuth, editUser(req, res, next));

router.put("user/promote/:id", validateAuth, promoteUser(req, res, next));

router.delete("user/:id", validateAuth, deleteUser(req, res, next));

router.get("user/getAll", validateAuth, getUsers(req, res, next));
