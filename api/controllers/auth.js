const User = require("../models/User");

const validateAuth = require("../middleware/auth");
const { generateToken } = require("../config/token");

class AuthController {
  static userLogin = async (req, res) => {
    try {
      const { password, email } = req.body;
      const user = await User.findOne({ where: { email } });

      const validation = user.validatePassword(password);
      if (validation) {
        res
          .cookie(
            "generatedToken",
            generateToken({
              name: user.name,
              id: user.id,
              email: user.email,
              role: user.role,
            })
          )
          .sendStatus(200);
      }
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
