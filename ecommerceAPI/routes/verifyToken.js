const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  console.log("Auth Header:", authHeader); // Log auth header for debugging
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.PASS_SEC, (err, user) => {
      if (err) {
        console.log("Token Verification Error:", err); // Log token verification error
        return res.status(403).json("Invalid token");
      } else {
        console.log("Decoded User:", user); // Log decoded user for debugging
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json("No token provided");
  }
};

const verifyTokenAndAuthorisation = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that");
    }
  });
};
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorisation,
  verifyTokenAndAdmin,
};
