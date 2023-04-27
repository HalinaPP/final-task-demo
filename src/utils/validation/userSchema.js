const Joi= require( 'joi');

const userPutSchema= Joi.object({
  id: Joi.string(),
  login: Joi.string().pattern(/[a-z\d@.]/),
  password: Joi.string().min(8).max(20),
});

const userPostSchema= Joi.object({
  id: Joi.string(),
  login: Joi.string()
    .pattern(/[a-z\d@.]/)
    .required(),
  password: Joi.string().min(8).max(20).required(),
});

const userLogoutSchema= Joi.object({
  login: Joi.string()
    .pattern(/[a-z\d@.]/)
    .required(),
});

module.exports = { userPutSchema, userPostSchema, userLogoutSchema };
