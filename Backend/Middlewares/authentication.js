const jwt = require("jsonwebtoken");
const User = require("../Models/user.model.js");
const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
});

async function checkAuthenticated(req, res, next) {
  const tokenValue = req.cookies[process.env.TOKEN_NAME];

  console.log("I am called", tokenValue);
  if (!tokenValue) {
    return res.status(404).json({
      success: false,
      message: "User is not logged in.",
    });
  }
  try {
    const payload = await jwt.verify(
      tokenValue,
      process.env.REFRESH_TOKEN_SECRET
    );

    if (!payload) {
      return next();
    }

    req.user = payload;
    return next();
  } catch (error) {
    return next();
  }
}

function authorizeRoles(...roles) {
  return async (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(401).json({
        success: false,
        message: "You are unauthorised to access this resource",
      });
      return next();
    }

    return next();
  };
}

module.exports = { checkAuthenticated, authorizeRoles };
