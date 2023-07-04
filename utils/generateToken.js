const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.generateToken = async(user) => {
   const token =  jwt.sign(
        {
          _id: user._id,
          email: user.email,
          phone: user.phone,
          name: user.full_name,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );
      return token
}