"use strict";
const nodemailer = require("nodemailer");
const config = require("../helpers/config");
const contactFormTemplate = require("../helpers/contactFormTemplate");
const careerFormTemplate = require("../helpers/careerFormTemplate");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.emailserver,
    pass: config.password,
  },
});

const emailFrom = {
  name: config.emailFromName,
  address: config.emailFromAddress,
};

const emailHR = {
  name: config.emailHrName,
  address: config.emailHrAddress,
};

const emailInfo = {
  name: config.emailInfoName,
  address: config.emailInfoAddress,
};

const debugView = (req, res, next) => {
  res.render("layout", {
    apiUrl: config.apiUrl,
    emailserver: config.emailserver,
    emailHrName,
    emailHrAddress,
    emailInfoName,
    emailInfoAddress,
    emailFromAddress,
    emailFromName,
    password: config.password,
  });
};

const contactForm = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.message) {
      return res.status(422).json({ message: "content missed" });
    }

    if (data.name === "400: test form fail") {
      return res.status(400).json({ message: "Bad request" });
    }

    try {
      const contactMailOptions = {
        from: emailFrom,
        to: emailInfo,
        cc: {
          name: data.name,
          address: data.email,
        },
      };
      const mailData = {
        ...contactMailOptions,
        subject: `Contact form: ${data.subject} by-${data.company} ${data.name}`,
        html: contactFormTemplate(data),
      };
      await transporter.sendMail(mailData);

      return res.status(200).json({ success: true });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return res.status(400).json({ message: "Bad request" });
    }
  }

  return res.status(400).json({ message: "Bad request" });
};

const careerForm = async (req, res, next) => {
  //res.send('call send Email api')
  try {
    const { data } = req?.body;
    const files = req?.files ? req.files : null;
    if (!!data) {
      const email = JSON.parse(data);

      if (!email.name || !email.email || !email.title || !email.mobile) {
        return res.status(422).json({ message: "content missed" });
      }

      if (email.name === "400: test form fail") {
        return res.status(400).json({ message: "Bad request" });
      }

      const mailOptions = {
        from: emailFrom,
        to: emailHR,
        cc: {
          name: email.name,
          address: email.email,
        },
        subject: email.subject || `Employment application: ${email.name}`,
        attachments: files,
        html: careerFormTemplate(email),
      };
      await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).send("Email Send: " + info.response);
        }
      });
    } else {
      res.status(400).send("no data: " + JSON.stringify(req));
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  contactForm,
  careerForm,
  debugView,
};
