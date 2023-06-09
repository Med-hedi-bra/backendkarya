const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
 if(req.headers["authorization"]){
   const  token = req.headers["authorization"].split(" ")[1];
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
      } catch (err) {
        return res.status(401).send("Invalid Token");
      }
      return next();
 }
 else {
    return res.status(403).send("A token is required for authentication");
 }
  
  
};

module.exports = verifyToken;