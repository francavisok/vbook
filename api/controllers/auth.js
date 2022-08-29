const User = require("../models/User");
const { generateToken } = require("../config/token");

class AuthController {
  static userLogin = async (req, res) => {
    try {
      const { password, email } = req.body;
      let payload;

      if (!req.body.loginWithGoogle) {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(401).send("user not found"); //agregue esta linea p chequear si encontraba bien el usuario

        const validation = await user.validatePassword(password); //agregue el await xq nunca validaba el passw
        if (!validation) return res.status(401).send("password invalid");

        payload = {
          id: user.id,
          name: user.name,
          lastname: user.lastname,
          userName: user.userName,
          email: user.email,
          role: user.role,
        };
      } else {
        const user = await User.findOrCreate({
          where: {
            name: req.body.name,
            lastname: req.body.lastname,
            userName: req.body.userName,
            email: req.body.email,
            loginWithGoogle: req.body.loginWithGoogle,
          },
        });

        payload = {
          id: user[0].id,
          name: user[0].name,
          lastname: user[0].lastname,
          userName: user[0].userName,
          email: user[0].email,
          role: user[0].role,
        };
      }

      res.cookie("generatedToken", generateToken(payload));
      res.status(200).send(payload);
    } catch (error) {
      res.send(error);
    }
  };

  static userSignUp = async (req, res) => {
    User.create(req.body)
      .then((user) => res.sendStatus(201)) //cuando se registra no necesitamos el envio de la data del user xq eos se tiene q cargar en el login

      .catch((error) => res.status(404).send(error.message));
  };

  static logOut = (req, res) => {
    res.clearCookie("generatedToken").sendStatus(204);
  };
}

module.exports = AuthController;
