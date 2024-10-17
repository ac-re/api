"use strict";

const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  EMAIL_SERVER,
  PASSWORD,
  API_URL,
  FRONTEND_DOMAIN,
  EMAIL_INFO_NAME,
  EMAIL_INFO_ADDRESS,
  EMAIL_HR_NAME,
  EMAIL_HR_ADDRESS,
  EMAIL_UNITY_FROM,
} = process.env;
assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  emailserver: EMAIL_SERVER,
  emailInfoName: EMAIL_INFO_NAME,
  emailInfoAddress: EMAIL_INFO_ADDRESS,
  emailHrName: EMAIL_HR_NAME,
  emailHrAddress: EMAIL_HR_ADDRESS,
  emailFrom: EMAIL_UNITY_FROM,
  password: PASSWORD,
  apiUrl: API_URL,
  frontendDomain: FRONTEND_DOMAIN,
};
