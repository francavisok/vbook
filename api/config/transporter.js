const nodemailer = require("nodemailer")
const testAccount = nodemailer.createTestAccount()

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "Aquí tiene que ir el mail de nuestra empresa", // generated ethereal user
      pass: "y la contraseña de aplicación NO la normal", // generated ethereal password
    },
  });

  transporter.verify(()=>{
    console.log("ready to send emails")
  })

  module.exports = transporter