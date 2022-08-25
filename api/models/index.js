const User = require('./User');
const Book = require('./Book');
const Genre = require('./Genre');
const Cart = require('./Cart');
const Order = require('./Order');

//Una orden pertenece a UN usuario
Order.belongsTo(User)
//Un usuario puede tener muchas ordenes
User.hasMany(Order)

//Un carro pertenece a UNA orden
Cart.belongsTo(Order)
//Una orden puede tener muchos carritos
Order.hasMany(Cart)

//Un genero pertenece a varios libros
Genre.hasMany(Book)
//Un producto pertenece a una categoría
Book.belongsTo(Genre)

module.exports = {Book, User, Genre, Cart, Order};