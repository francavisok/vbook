const express = require("express");
const router = express.Router();
const { validateAuth } = require("../middleware/auth");
const {
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");

router.post("/", validateAuth, addBook);

router.put("/:id", validateAuth, updateBook);

router.delete("/:id", validateAuth, deleteBook);

module.exports = router

