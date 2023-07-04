const authModel = require("../model/auth");
const STATUSCODE = require("../utils/status-codes");
const { generateToken } = require("../utils/generateToken");
const bcrypt = require("bcrypt");

exports.signup = async (data) => {
  /**
   * checkig if user exists
   */
  const userExist = await authModel.findOne({ email: data.email });
  if (userExist) {
    return {
      STATUS_CODE: STATUSCODE?.BAD_REQUEST,
      STATUS: false,
      MESSAGE: "user already exist",
    };
  }
  /**
   * create user
   */

  const createUser = await authModel.create(data);

  return {
    STATUS_CODE: STATUSCODE.CREATED,
    STATUS: true,
    MESSAGE: "account created successfully!",
    DATA: createUser,
  };
};

exports.signin = async (data) => {
  const userExist = await authModel.findOne({ email: data.email });
  if (!userExist) {
    return {
      STATUS_CODE: STATUSCODE?.BAD_REQUEST,
      STATUS: false,
      MESSAGE: "Invalid credentials",
    };
  }

  /**
   * decrypt password
   */
  const password_match = await bcrypt.compare(
    data.password,
    userExist.password
  );
  if (!password_match)
    return {
      STATUS_CODE: STATUSCODE.NOT_FOUND,
      STATUS: false,
      MESSAGE: "Invalid  Credentials",
    };

  const token = await generateToken(userExist);
  return {
    STATUS_CODE: STATUSCODE.OK,
    STATUS: true,
    MESSAGE: "Login Successful!",
    DATA: {
      userExist,
      token,
    },
  };
};
