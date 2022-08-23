const express = require("express");
const router = express.router();
const { validateAuth } = require("../middleware/auth");
const {
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");

router.post("/", validateAuth, addBook(req, res));

router.put("/:id", validateAuth, updateBook(req, res));

router.delete("/:id", validateAuth, deleteBook(req, res));

module.exports = router

