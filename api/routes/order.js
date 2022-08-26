const express = require("express");
const router = express.Router();
const { validateAuth } = require("../middleware/auth");

const {
  continueOrder,
  getOrder,
  payOrder,
  getFullfiled,
  deleteOrder,
} = require("../controllers/order");

router.get("/", validateAuth, getOrder);

router.put("/", validateAuth, continueOrder);

router.put("/pay", validateAuth, payOrder);

router.delete("/:id", validateAuth, deleteOrder);

router.get("/fullfiledOrders", validateAuth, getFullfiled);

module.exports = router;
