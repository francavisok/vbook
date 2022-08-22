const Sequelize = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class Book extends Sequelize.Model {
  encryptPassword(password, salt) {
    return bcrypt.hash(password, salt);
  }
  validatePassword(password) {
    return bcrypt
      .hash(password, this.salt)
      .then((hash) => hash === this.password);
  }
}
Book.init(
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    BookName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    }
  },
  { sequelize: db, modelName: "Book" }
);



Book.beforeCreate((Book) => {
  Book.salt = bcrypt.genSaltSync();
  return Book.encryptPassword(Book.password, Book.salt).then((hash) => {
    Book.password = hash;
  });
});

module.exports = Book;