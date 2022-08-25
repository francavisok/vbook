const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genre")

router.get("/", genreController.getAllGenres);

router.post("/",genreController.addGenre)

router.get("/:id",genreController.getProductByGenre);

module.exports = router;
