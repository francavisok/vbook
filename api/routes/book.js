const express = require("express");
const router = express.Router();
const { validateAuth } = require("../middleware/auth");
const {
  addBook,
  updateBook,
  deleteBook,
  getAllBooks,
  getBookById,
} = require("../controllers/book");

router.post("/",  validateAuth,  addBook);

router.put("/:id", validateAuth, updateBook);

router.delete("/:id", validateAuth, deleteBook);

router.get("/", getAllBooks);

router.get("/:id", getBookById);

module.exports = router;
