const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genre");
const { validateAuth, validateAdmin } = require("../middleware/auth");

router.get("/", genreController.getAllGenres);

router.post("/", validateAuth, validateAdmin, genreController.addGenre);

router.get("/:id", genreController.getProductByGenre);

module.exports = router;
