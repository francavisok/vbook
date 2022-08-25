const { Cart, Order } = require("../models");
const transporter= require("../config/transporter")

class OrderController {
  static getOrder = async (req, res) => {
    const order = await Order.findAll({
      where: { userId: req.user.id, state : "pending" },
      include: [
        {
          model: Cart,
        },
      ],
    });
    res.send(order[0].carts);
  };

  static continueOrder = async (req, res) => {
    await Order.update(
      { state: "procesing" },
      { where: { userId: req.user.id, state: "pending" } }
    );
    const cart = await Order.findAll({
      where: { userId: req.user.id, state: "procesing" },
      include: [
        {
          model: Cart,
        },
      ],
    });

    if (cart[0].carts) {
      cart[0].carts.forEach(async (cart) => {
        await Cart.update({ state: "procesing" }, { where: { id: cart.id } });
      });
    }
    res.status(203).send("actualizado");
  };

  static payOrder = async (req, res) => {

    //domicilio paymentmethod
    await Order.update(
      { state: "fullfiled" },
      { where: { userId: req.user.id, state: "procesing" } }
    );
    const cart = await Order.findAll({
      where: { userId: req.user.id, state: "fullfiled" },
      include: [
        {
          model: Cart,
        },
      ],
    });

    if (cart[0].carts) {
      cart[0].carts.forEach(async (cart) => {
        await Cart.update({ state: "fullfiled" }, { where: { id: cart.id } });
      });

    }
    await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: req.user.email, // list of receivers
      subject: "Hello ✔", // Subject line
      html: "<b>Hello world?</b>", // html body
    })



    res.status(203).send(cart);
  };
  static getFullfiled = async (req, res) => {
    const order = await Order.findAll({
        where: { userId: req.user.id, state : "fullfiled" },
        include: [
          {
            model: Cart,
          },
        ],
      });
      res.send(order);
  };
}

module.exports = OrderController;
