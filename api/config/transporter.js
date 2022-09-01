const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "VbookP5@gmail.com",
      pass: "hyxzbecjefssjjno"
    },
  });

  transporter.verify(()=>{
    console.log("ready to send emails")
  })

  module.exports = transporter