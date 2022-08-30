const User = require('./User');
const Book = require('./Book');
const Genre = require('./Genre');
const Cart = require('./Cart');
const Order = require('./Order');
const Reviews = require('./Reviews');
const { getNextKeyDef } = require('@testing-library/user-event/dist/keyboard/getNextKeyDef');

//Una orden pertenece a UN usuario
Order.belongsTo(User)
//Un usuario puede tener muchas ordenes
User.hasMany(Order)

//Un carro pertenece a UNA orden
Cart.belongsTo(Order)
//Una orden puede tener muchos carritos
Order.hasMany(Cart)

//Un genero pertenece a varios libros
Book.belongsTo(Genre)
//Un producto pertenece a una categoría
Genre.hasMany(Book)

//UNA review pertenece a UN libro
Reviews.belongsTo(Book);
//Un libro puede tener muchas reviews
Book.hasMany(Reviews);

//UNA review pertenece a UN user
Reviews.belongsTo(User);
//Un user puede tener muchas reviews
User.hasMany(Reviews);

//AÑADIDO ,REVIEWS, SI NO FUNCIONA BORRAR ANTES DE PUSHEAR.
module.exports = {Book, User, Genre, Cart, Order, Reviews};