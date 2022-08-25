const User = require("../models/User");

function editUser(req, res, next) {
  User.update(req.body, { where: { id: req.user.id } }).then(() => {
    res.send("actualizado");
  });
}
function promoteUser(req, res, next) {
  if (req.user.role !== "admin") {
    res.send("You are not an administrator");
  }
  else{
  User.update({ role: "admin" }, { where: { id: Number(req.params.id) } }).then(
    () => {
      res.send("actualizado");
    }
  );}
}
//añadida función para quitarle privilegios de ADMIN a un usuario. Imposibilita quitarse los privilegios a uno mismo.
function demoteUser(req, res, next) {
  if (req.user.role !== "admin") {
    res.send("You are not an administrator");
  }
  if(req.user.id === Number(req.params.id)){
     res.send("You can't revoke permissions yourself!");
  } else{
  User.update({ role: "user" }, { where: { id: Number(req.params.id) } }).then(
    () => {
      res.send("actualizado");
    }
  )};
}
function deleteUser(req, res, next) {
  if (req.user.role !== "admin") {
    res.send("You are not allowed to delete users");
  }

  User.delete({ id: Number(req.params.id) }).then(() => {
    res.send("Usuario eliminado");
  });
}
function getUsers(req, res, next) {
  if (req.user.role !== "admin") {
    res.send("You are not an administrator");
  }
  User.findAll().then((usuarios) => {
    res.send(usuarios);
  });
}
module.exports = { editUser, promoteUser, demoteUser, deleteUser, getUsers};