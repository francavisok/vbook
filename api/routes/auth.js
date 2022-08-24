const express = require("express");
const User = require("../models/User");
const router = express.Router();
const AuthController = require("../controllers/auth");
const { validateAuth } = require("../middleware/auth");

router.post("/login", AuthController.userLogin);

router.post("/signin",AuthController.userSignUp )

router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});


module.exports = router