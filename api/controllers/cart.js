const { Cart, Order } = require("../models");

class CartController {
  static addToCart = async (req, res) => {
    const newCart = await Cart.create(req.body);
    const order = await Order.findAll({
      where: { userId: req.user.id, state: "pending" },
    });
    if (order.length) {
      order[0].setCart(newCart);
    } else {
      const newOrder = await Order.create({ userId: req.user.id });
      newOrder.setCart(newCart);
    }
    res.status(201).send(newCart);
  };

  static deleteFromCart = async (req, res) => {
    const cart = await Cart.findOne({
      where: { id: req.params.id, state: "pending" },
    });
    if (cart) {
      Cart.destroy(cart);
      res.status(204).send("deleted");
    } else {
      res.status(404).send("This article can't be reached");
    }
  };

  static editAmount = (req, res) => {
    Cart.update({ amount: req.body.amount }, { where: { id: req.params.id } });
  };
}

module.exports = CartController;
