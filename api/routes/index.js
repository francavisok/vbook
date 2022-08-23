const express = require("express");
const router = express.Router();
const Book = require("./book")
const User = require("./users")
const Auth = require("./auth")

router.use("/book", Book)
router.use("/user", User)
router.use("/auth", Auth)
router.get("/", (req,res) =>{
  res.send("hola mundo")
})

module.exports = router