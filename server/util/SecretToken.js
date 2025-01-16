const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../.env" });


module.exports.createSecretToken = (id) => {
  if (!process.env.TOKEN_KEY) {
    throw new Error("JWT_SECRET is not defined in the environment variables.");
  }
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: "1h", // Token expiration time
  });
};