const User = require("../models/User");

const validateAuth = require("../middleware/auth");
const {generateToken} = require("../config/token");

class AuthController {
  static userLogin = async (req, res) => {
    try {
      const { password, email } = req.body;
      const usuario = await User.findOne({ where: { email} });
      
      const validation = usuario.validatePassword(password);
      if (validation) {
    
        res.cookie("generatedToken", generateToken(email)).sendStatus(200);
      }
    } catch (error) {
      res.send(error);
    }
  };

  static userSignUp = async (req, res) => {
    console.log("soy req.body",req.body)
    User.create(req.body).then((user) => res.send(user))
    .catch((error)=>res.send(error))
    // res.send("soy userSignUp")
    // const newUser = await User.create(req.body)
    // res.status(201).send(newUser)
    // try {
    //   const { email, name, password, lastname, userName} = req.body;

    //   [newUser, created] = await User.findOrCreate(req.body,{
    //     where: { email },
    //   });

    //   if (created) {
    //     res.cookie("userCreatedToken", generateToken(name).sendStatus(201));
    //   } else {
    //     res.send("Este usuario ya existe");
    //   }
    // } catch (error) {
    //   res.send(error);
    // }
  };
  

  static logOut = (req, res) => {
    res.cookie("userCreatedToken", "").send("sesión cerrada");
  };
}

module.exports = AuthController;
