const Joi = require('joi');

const userSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
});

const projectSchema = Joi.object({
  createdByUserId: Joi.string(),
  title: Joi.string().min(3).required(),
  description: Joi.string().min(10).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
});

module.exports = { userSchema, projectSchema, loginSchema };