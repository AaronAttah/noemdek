const authService  = require("../services/authService")

exports.signup = async(req, res, next) =>{
    const data = await authService.signup(req.body);

    return res.status(data.STATUS_CODE).json({
      status: data.STATUS,
      message: data.MESSAGE,
      data: data.DATA,
    });
}

exports.signin = async(req, res, next) =>{
  const data = await authService.signin(req.body);

  return res.status(data.STATUS_CODE).json({
    status: data.STATUS,
    message: data.MESSAGE,
    data: data.DATA,
  });
    
}