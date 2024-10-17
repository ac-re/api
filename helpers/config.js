"use strict";

const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  EMAIL_SERVER,
  EMAIL_TO,
  PASSWORD,
  API_URL,
  CONTACT_EMAIL_TO,
  FRONTEND_DOMAIN,
  EMAIL_FROM_INFO_NAME,
  EMAIL_FROM_INFO_ADDRESS,
  EMAIL_FROM_HR_NAME,
  EMAIL_FROM_HR_ADDRESS,
} = process.env;
assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  emailserver: EMAIL_SERVER,
  emailFromInfoName: EMAIL_FROM_INFO_NAME,
  emailFromInfoAddress: EMAIL_FROM_INFO_ADDRESS,
  emailFromHrName: EMAIL_FROM_HR_NAME,
  emailFromHrAddress: EMAIL_FROM_HR_ADDRESS,
  emailto: EMAIL_TO,
  password: PASSWORD,
  apiUrl: API_URL,
  contactEmailto: CONTACT_EMAIL_TO,
  frontendDomain: FRONTEND_DOMAIN,
};
