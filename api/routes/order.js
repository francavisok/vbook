const express = require("express");
const router = express.Router();
const { validateAuth } = require("../middleware/auth");

const { continueOrder, getOrder,payOrder, getFullfiled } = require("../controllers/order");

router.get("/", validateAuth, getOrder);
router.put("/", validateAuth, continueOrder);
router.post("/pay", validateAuth, payOrder);
router.get("/fullfiledOrders", validateAuth, getFullfiled);

module.exports = router
