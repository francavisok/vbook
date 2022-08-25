const Sequelize = require("sequelize");
const db = require("../db");

class Book extends Sequelize.Model {}
Book.init(
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    posterURL: {
      type: Sequelize.STRING,
      
    },
    releaseDate: {
        type: Sequelize.DATE,
        
    },
    publisher: {
        type: Sequelize.STRING,
    },
    rating: {
        type: Sequelize.INTEGER,
        defaultValue: 4
    },
  },
  { sequelize: db, modelName: "book" }
);


module.exports = Book;