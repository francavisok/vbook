const Sequelize = require("sequelize");
const db = require("../db");
const Book = require("./Book");

class Cart extends Sequelize.Model {}
Cart.init(
  {
    state: {
      type: Sequelize.STRING,
      defaultValue: "pending",
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    amount: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
    state: {
      type: Sequelize.STRING,
      defaultValue: "pending",
    },
    totalPrice: {
      type: Sequelize.INTEGER,
    },
  },
  { sequelize: db, modelName: "cart" }
);

Cart.beforeCreate(async (cart) => {
  let product = await Book.findByPk(cart.productId);
  cart.totalPrice = cart.amount * product.price;
});
module.exports = Cart;
