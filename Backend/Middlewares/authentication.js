const jwt = require("jsonwebtoken");
const User = require("../Models/user.model.js");

function checkAuthenticated() {
  return async (req, res, next) => {
    const tokenValue = req.cookies[process.env.TOKEN_NAME];

    // console.log("I am called",tokenValue);
    if (!tokenValue) {
      return next();
    }
    try {
      const payload = await jwt.verify(
        tokenValue,
        process.env.REFRESH_TOKEN_SECRET
      );

      if (!payload) {
        return next();
      }

      req.user = await User.findById(payload._id).select("-password");

      return next();
    } catch (error) {
      return next();
    }
    return next();
  };
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
