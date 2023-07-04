const Joi = require("joi");
const STATUSCODE = require("../utils/status-codes");
const  { formatResult } = require ("../utils/formatResult");


exports.validate = (validator) => {
  return (req, res, next) => {
    const { error } = validator(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    next();
  };
};

exports.quotationValidator = (req, res, next) => {

  const schema = Joi.object({
    driver_name: Joi.string().min(5).max(255).required(),
    vehicle_name: Joi.string().min(5).max(255).required(),
    condition: Joi.string().min(5).max(255).required(),
    client_name: Joi.string().min(5).max(255).required(),
    client_company: Joi.string().min(5).max(255).required(),
    service: Joi.string().min(5).max(255).required(),
    pickup_location: Joi.string().min(5).max(255).required(),
    drop_off_location: Joi.string().min(5).max(255).required(),
  
  });
  const result = formatResult(schema.validate(req.body));

  if(result.error) return res.status(STATUSCODE.BAD_REQUEST).json({
      error: {
          message: result.message
      }
  });
  next();
};

