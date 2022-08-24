const User = require("../models/User");

const validateAuth = require("../middleware/auth");
const {generateToken} = require("../config/token");

class AuthController {
  static userLogin = async (req, res) => {
    try {
      const { password, email } = req.body;
      const user = await User.findOne({ where: { email} });
      
      const validation = user.validatePassword(password);
      if (validation) {
    
        res.cookie("generatedToken", generateToken(user)).sendStatus(200);
      }
    } catch (error) {
      res.send(error);
    }
  };
  
  static userSignUp = async (req, res) => {
    console.log("soy req.body",req.body)
    User.create(req.body).then((user) => res.send(user))
    .catch((error)=>res.send("soy el error",error))
    
  };
  

  static logOut = (req, res) => {
    res.cookie("generatedToken", "").send("sesión cerrada");
  };
}

module.exports = AuthController;
