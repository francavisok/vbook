const { Book, User, Favorite } = require("../models");

class favoritesController {
  static addToFavorites = async (req, res) => {
    const user = await User.findOne({
      where: req.user,
      include: [
        {
          model: Favorite,
        },
      ],
    });
    const book = await Book.findOne({ where: { id: req.params.id } });
    let notFavoriteAlready = true;
    user.favorites.forEach((favorite) => {
      if (favorite.bookId === book.id) {
        notFavoriteAlready = false;
      }
    });
    if (notFavoriteAlready) {
      const favorite = await Favorite.findOrCreate({
        where: {
          bookTitle: book.title,
          bookId: book.id,
          bookImage: book.posterURL,
          author: book.author,
          price: book.price,
          description: book.description,
        },
      });
      user.addFavorite(favorite[0]);
      res.send("added to favorites");
    } else {
      res.send("that book is already in your list");
    }
  };

  static deleteFavorite = async (req, res) => {
    const favorite = await Favorite.findOne({
      where: { id: Number(req.params.id) },
    });
    Favorite.destroy({ where: { id: favorite.id } });
    res.status(204).send("deleted");
  };

  static getFavoriteByTitle = async (req, res) => {
    const user = await User.findOne({
      where: req.user,
      include: [
        {
          model: Favorite,
        },
      ],
    });
    let filteredFavorites = [];
    user.favorites.forEach((favorite) => {
      if (
        favorite.bookTitle
          .toLowerCase()
          .includes(req.params.title.toLowerCase())
      ) {
        filteredFavorites.push(favorite);
      }
    });
    res.send(filteredFavorites)
  };
}

module.exports = favoritesController;
