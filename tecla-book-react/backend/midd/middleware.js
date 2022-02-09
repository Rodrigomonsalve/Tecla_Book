const jwt = require ("jsonwebtoken");

const userVerify = async (token) => {
    return jwt.verify(token, "Alojamora");
};

module.exports.authenticate = async (req,res,next) => {
    console.log("req.headers", req.headers)
    try {
          if(req.headers.authorization) {
              const token = req.headers.authorization.split(" ")[1]
              console.log("token", token)
              const verification = userVerify (token);
              if (verification)
                return next(); 
          } else {
             res.status(500).json({error:"No token"}) 
          }
    }
    catch (err) {
        res.status(500).json({error: err})
    }
};