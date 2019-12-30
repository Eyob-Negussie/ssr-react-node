const Joi = require("joi");

function validateUser(user) {
  const schema = {
    firstName: Joi.string()
      .min(3)
      .max(50)
      .required(),
    lastName: Joi.string()
      .min(5)
      .max(255)
      .required(),
    email: Joi.string()
      .min(5)
      .max(50)
      .required()
      .email(),
    phoneNumber: Joi.string()
      .trim()
      .regex(/^[0-9]{7,10}$/)
      .required()
  };

  return Joi.validate(user, schema);
}

module.exports.validate = validateUser;
