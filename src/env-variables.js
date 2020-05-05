const dotenv = require("dotenv");
const path = require("path");
const envfile = path.join(__dirname, "..", ".env");
dotenv.config({
  path: envfile,
});

const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.ACCESS_KEY_SECRET;
const userArn = process.env.USER_ARN;
const defaultRegion = process.env.AWS_DEFAULT_REGION;

module.exports = {
  accessKeyId,
  secretAccessKey,
  userArn,
  defaultRegion,
};
