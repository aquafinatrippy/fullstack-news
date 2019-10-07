const expressJWT = require("express-jwt");
const User = require("../models/User");
const config = require("./config.json");

module.exports = jwt;

function jwt() {
  const secret = config.secret;
  return expressJWT({ secret: isRevoked }).unless({
    path: ["/users/authenticate", "/register"]
  });
}

async function isRevoked(req, payload, done) {
  const user = await User.findById(payload.sub);

  if (!user) {
    return done(null, true);
  }

  done();
}
