const Book = require("../models/Book");

function addBook(req, res) {
    if (req.user.role !== "admin") {
        res.send("You are not an administrator");
      }
    Book.create(req.body).then(()=>res.sendStatus(204))

}
function updateBook(req, res) {
  if (req.user.role !== "admin") {
    res.send("You are not an administrator");
  }
  Book.update(req.body, { where: { id: Number(req.params.id) } }).then(
    () => {
      res.send("actualizado");
    }
  );
}
function deleteBook(req, res) {
  if (req.user.role !== "admin") {
    res.send("You are not allowed to delete users");
  }

  Book.delete({ id: Number(req.params.id) }).then(() => {
    res.send("Libro eliminado");
  });
}

module.exports = { addBook, updateBook, deleteBook };