var jwt = require('jsonwebtoken');
var fs = require('fs')

var secretKey = fs.readFileSync('private.key', { encoding: 'utf8' });

var options = {
  scope: "editing,manufacturing",

  secretKey,

  expiresIn: "86400",
  issuer: "HSI-ESB-API-Services",
  jwtid: "AuthLib2.0",
  subject: "HCA_AUTH_JWT",
}

console.log("options", options);

var accessToken = jwt.sign(
  {
    scope: options.scope
  },
  secretKey,
  {
    algorithm: "HS256",
    issuer: options.issuer,
    subject: options.subject,
    jwtid: options.jwtid,
    header: {
      scope: options.scope,
    },
    expiresIn: options.expiresIn,
  }
);

console.log("-----")
console.log("accessToken", accessToken);
console.log("-----")
