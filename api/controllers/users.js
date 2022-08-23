const User = require("../models/User");

function editUser(req, res, next) {
  User.update(req.body, { where: { id: req.user.id } }).then(()=>{res.send("actualizado")});
}
function promoteUser(req, res, next) {
  if (res.user.role !== "admin") {
    res.send("You are not an administrator");
  }
  User.update({ role: "admin" }, { where: { id: Number(req.params.id) } }).then(()=>{res.send("actualizado")});
}
function deleteUser(req, res, next) {
  if (res.user.role !== "admin") {
    res.send("You are not allowed to delete users");
  }

  User.delete({ id: Number(req.params.id) }).then(() => {
    res.send("Usuario eliminado");
  });
}
function getUsers(req, res, next) {
  if (res.user.role !== "admin") {
    res.send("You are not an administrator");
  }
  User.findAll().then((usuarios) => {
    res.send(usuarios);
  });
}
module.exports = { editUser, promoteUser, deleteUser, getUsers };
