const User = require("../models/User");

const validateAuth = require("../middleware/auth");
const { generateToken } = require("../config/token");

class AuthController {
  static userLogin = async (req, res) => {
    try {
      const { password, email } = req.body;
      console.log("ELEMAILLLL", email);

      const user = await User.findOne({ where: { email } });
      console.log("user del back", user);

      if (!user) return res.sendStatus(401);

      const validation = await user.validatePassword(password);
      if (!validation) return res.sendStatus(401);

      const payload = {
        name: user.name,
        id: user.id,
        email: user.email,
        role: user.role,
      };
      res.cookie( "generatedToken", generateToken(payload))
      res.send(payload);

    } catch (error) {
      res.send(error);
    }
  };

  static userSignUp = async (req, res) => {
    User.create(req.body)
      .then((user) =>
        res.send({
          name: user.name,
          id: user.id,
          email: user.email,
          role: user.role,
        })
      )
      .catch((error) => res.send("soy el error", error));
  };

  static logOut = (req, res) => {
    res.cookie("userCreatedToken", "").send("sesión cerrada");
  };
}

module.exports = AuthController;
