const express = require("express");
const router = express.router();
const Book = require("./book")
const User = require("./users")

router.use("/book", Book)
router.use("/user", User)

module.exports = router