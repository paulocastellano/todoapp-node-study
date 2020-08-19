const path = require("path");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

const mailConfig = require("../config/mail");

const transport = nodemailer.createTransport({
  host: mailConfig.host,
  port: mailConfig.port,
  auth: {
    user: mailConfig.user,
    pass: mailConfig.password,
  },
});

transport.use(
  "compile",
  hbs({
    viewEngine: {
      defaultLayout: false,
    },
    viewPath: path.resolve("./src/resources/mail"),
    extName: ".html",
  })
);

module.exports = transport;
