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
}

module.exports = genreController;
