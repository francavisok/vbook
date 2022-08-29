const express = require("express");
const router = express.Router();
const { validateAuth } = require("../middleware/auth");
const {
  addToFavorites,
  deleteFavorite,
  getFavoriteByTitle
} = require("../controllers/favorites");

router.post("/:id", validateAuth, addToFavorites);

router.delete("/:id", validateAuth, deleteFavorite);

router.get("/find/:title", getFavoriteByTitle);

module.exports = router;