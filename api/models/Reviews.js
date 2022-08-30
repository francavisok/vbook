const { AlertDialogOverlay } = require("@chakra-ui/react");
const Sequelize = require("sequelize");
const db = require("../db");
const Book = require("./Book");

class Reviews extends Sequelize.Model {}

Reviews.init(
    {
      valoration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      reviewComment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bookId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    { sequelize: db, modelName: "reviews" }
  );
  Reviews.afterBulkUpdate(async (reviews) => {
    let cont = 0;
    const rev = await Reviews.findAll({
      where: {
        bookId: reviews.where.bookId,
      },
    });
    rev.forEach(review => {
      cont += review.valoration
    });
    await Book.update(
      { rating: cont / rev.length },
      {
      where: {
        id: reviews.where.bookId,
      },
    })
});


  Reviews.afterCreate(async (reviews) => {
        let cont = 0;
        const rev = await Reviews.findAll({
          where: {
            bookId: reviews.bookId,
          },
        });
        rev.forEach(review => {
          cont += review.valoration
        });
        await Book.update(
          { rating: cont / rev.length },
          {
          where: {
            id: reviews.bookId,
          },
        })
        //console.log(await Book.findOne({where: {id: reviews.bookId}}));
    });

    Reviews.beforeBulkDestroy(async (reviews) => {
      let cont = 0;
      const rev = await Reviews.findAll({
        where: {
          bookId: reviews.where.bookId,
        },
      });
      rev.forEach(review => {
        cont += review.valoration
      });
      await Book.update(
        { rating: rev.lenght ? cont / rev.length : 0 },
        {
        where: {
          id: reviews.where.bookId,
        },
      })
  });


  
 
  module.exports = Reviews;