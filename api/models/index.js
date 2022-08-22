const User = require('./User');
const Book = require('./Book');



/* Users.belongsToMany(Movies, { as: "favorites", through: "favorites_movies" });
Movies.belongsToMany(Users, { as: "favorites", through: "favorites_movies" }); */



module.exports = {Book, User};