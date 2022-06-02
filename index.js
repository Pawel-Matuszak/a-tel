const express = require('express')
const nodemailer = require("nodemailer")
const {body} = require("express-validator")
const cors = require("cors")
const path = require("path")
require("dotenv").config()
const app = express()
const port = 8000


app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"))

  app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

async function main(senderMail, topic, content, res) {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    disableFileAccess: true,
    disableUrlAccess: true,
    auth: {
      user: process.env.EMAIL_LOGIN, 
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: "Formularz kontaktowy", 
    to: process.env.EMAIL_TO.split(' '), 
    subject: topic,
    html: `
      <b>Nadawca:</b> ${senderMail}<br>
      <b>Temat:</b> ${topic}<br>
      <b>Treść:</b> ${content}`, 
  });


  res.json({status: true})
}

app.post(
  '/', 
  body("email").isEmail().normalizeEmail(), 
  body("topic").notEmpty().trim().escape(), 
  body("content").notEmpty().trim().escape(),
  (req, res) => {
    main(req.body.email, req.body.topic, req.body.content, res).catch((err)=>{
      console.error(err)
      res.json({status: false})
    });
})


app.listen(port, () => console.log(`Atel API listening on port ${port}!`))