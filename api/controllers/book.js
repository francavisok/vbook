const { Op } = require("sequelize");
const { Genre } = require("../models");
const Book = require("../models/Book");

async function addBook(req, res) {
  const book = await Book.create(req.body);
  const genre = await Genre.findByPk(req.body.idGenre);
  genre.addBook(book);
  res.sendStatus(200);
}
function updateBook(req, res) {
  Book.update(req.body, { where: { id: Number(req.params.id) } }).then(() => {
    res.send("actualizado");
  });
}
function deleteBook(req, res) {
  Book.delete({ id: Number(req.params.id) }).then(() => {
    res.send("Libro eliminado");
  });
}

function getAllBooks(req, res) {
  Book.findAll()
    .then((book) => res.send(book))
    .catch((error) => res.send(error));
}

function getBookById(req, res) {
  const { id } = req.params;
  Book.findByPk(id)
    .then((book) => res.send(book))
    .catch((error) => res.send(error));
}

async function getBookByTitle(req, res) {
  const { title } = req.params;
  const books = await Book.findAll({
    where: {
      title: {
        [Op.substring]: title,
      },
    },
  });
  res.send(books);
}

module.exports = {
  addBook,
  updateBook,
  deleteBook,
  getAllBooks,
  getBookById,
  getBookByTitle,
};
