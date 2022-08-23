const express = require("express");
const router = express.router();
const { validateAuth } = require("../middleware/auth");
const {
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");

router.post("book", validateAuth, addBook(req, res));

router.put("book/:id", validateAuth, updateBook(req, res));

router.delete("book/:id", validateAuth, deleteBook(req, res));

