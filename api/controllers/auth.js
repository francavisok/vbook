const User = require("../models/User");

const validateAuth = require("../middleware/auth");
const { generateToken } = require("../config/token");

class AuthController {
  static userLogin = async (req, res) => {
    try {
      const { password, email } = req.body;

      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(401).send('user not found'); //agregue esta linea p chequear si encontraba bien el usuario

      const validation = await user.validatePassword(password); //agregue el await xq nunca validaba el passw
      if (!validation) return res.status(401).send('password invalid');

      const payload = {  //puse el obj en una const para no repetir codigo y mandarlo en la cookie y en el res.send
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        userName: user.userName,
        email: user.email,
        role: user.role,
      };

      res.cookie("generatedToken", generateToken(payload));
      res.status(200).send(payload);

    } catch (error) {
      res.send(error);
    }
  };

  static userSignUp = async (req, res) => {
    User.create(req.body)
      .then((user) => res.sendStatus(201)) //cuando se registra no necesitamos el envio de la data del user xq eos se tiene q cargar en el login
      
      .catch((error) => res.send("soy el error", error));
  };

  static logOut = (req, res) => {
    res.clearCookie("generatedToken");
    res.sendStatus(204);
    //res.cookie("userCreatedToken", "").send("sesión cerrada"); //comente esta linea porq aca estabamos creando una nueva cookie vacia y no estabamos borrando la del usuario logueado
  };
}

module.exports = AuthController;
