const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { validateAuth } = require("../middleware/auth");
const AuthController = require("../controllers/auth");

router.post("/login", AuthController.userLogin);

router.post("/signin", AuthController.userSignUp);

router.post("/logout", AuthController.logOut);

router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
