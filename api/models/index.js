const User = require('./User');
const Book = require('./Book');
const Genre = require('./Genre');

User.belongsToMany(Book, { as: "favorites", through: "favorites_books" });
Book.belongsToMany(User, { as: "favorites", through: "favorites_books" });

User.belongsToMany(Book, { as: "cart", through: "cart_item" });
Book.belongsToMany(User, { as: "cart", through: "cart_item" });

User.belongsToMany(Book, { as: "bought", through: "bought_item" });
Book.belongsToMany(User, { as: "bought", through: "bought_item" });

Genre.belongsToMany(Book, { as: "bookgenre", through: "genres_books" });
Book.belongsToMany(Genre, { as: "bookgenre", through: "genres_books" });



module.exports = {Book, User, Genre};