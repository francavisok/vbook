const express = require("express");
const router = express.Router();
const Book = require("./book");
const User = require("./users");
const Auth = require("./auth");
const Cart = require("./cart");

router.use("/book", Book);
router.use("/user", User);
router.use("/auth", Auth);
router.use("/cart", Cart);


module.exports = router;
