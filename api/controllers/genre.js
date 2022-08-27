const { Book, Genre } = require("../models");

class genreController {
  static getAllGenres = async (req, res) => {
    res.send(await Genre.findAll());
  };

  static addGenre = async (req, res) => {
    const newGenre = await Genre.create(req.body);
    res.send(newGenre);
  };

  static getProductByGenre = async (req, res) => {
    const { id } = req.params;
    const genreBooks = await Book.findAll({
      where: { idGenre: id },
    });

    console.log(genreBooks);
    res.send(genreBooks);
  };

  static getProductByTitle = async (req, res) => {
    const { title } = req.body;
    const titleBook = await Book.findAll({ where: { title: title } });
    res.send(titleBook);
  };

  static editGenre = async (req, res) => {
    const { id } = req.params;
    const { genreName } = req.body;
    //cambio el nombre del género, pero y los libros asignados a ese género?
    const editedGenre = await Genre.update({ where: { id } });
  };

  static deleteGenre = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Genre.destroy({ where: { id } });
      res.sendStatus(204);
    } catch (error) {
      //revisar como devolver el error
      res.send(error);
    }
  };
}

module.exports = genreController;
