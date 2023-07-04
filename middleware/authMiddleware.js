const jwt = require("jsonwebtoken");
const STATUSCODE = require("../utils/status-codes");
const authModel = require("../model/auth");

/*
 * check token validity
 */
const authToken = (req, res, next) => {
  try {
    if (req?.headers?.authorization?.startsWith("Bearer")) {
      const token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      next();
      return;
    }
    return res.status(400).json({
      status: "failed",
      error: "Access Denied",
    });
  } catch (error) {
    return res.status(STATUSCODE.UNAUTHORIZED).json({
      status: "failed",
      error: "Session Ended Please Login!",
    });
  }
};



const sup_access = async (req, res, next) => {
    const { email } = req.user;
    const adminUser = await authModel.findOne({ email })
    console.log({ user: adminUser?.admin_roles? adminUser?.admin_roles: {error:" 😡 cannot find the admin that wants to carry the operation.. check authMidleware file for this error"}});
  
    if (adminUser) {
     
    

      if (adminUser.role==="admin" ) {
        next();
      } else {
        return res.status(401).json({ status: "failed", error: " Not an Admin, access denied!" });
      }
    }
  
  
  };
  
module.exports = { authToken, sup_access };
