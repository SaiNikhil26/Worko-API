const Joi = require('joi');

// Schema definitions
const emailSchema = Joi.string().email().required().messages({
  'string.email': 'Email is not valid',
  'any.required': 'Email is required',
});

const zipCodeSchema = Joi.string().pattern(/^\d+$/).required().messages({
  'string.pattern.base': 'Zip code is not valid',
  'any.required': 'Zip code is required',
});

const idSchema = Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().messages({
  'string.pattern.base': 'Invalid ID format',
  'any.required': 'ID is required',
});

// Middleware to validate email
const validateEmail = (req, res, next) => {
  const { error } = emailSchema.validate(req.body.email);
  if (error) {
    return res.status(400).json({ errors: [{ msg: error.details[0].message }] });
  }
  next();
};

// Middleware to validate zip code
const validateZipCode = (req, res, next) => {
  const { error } = zipCodeSchema.validate(req.body.zipCode);
  if (error) {
    return res.status(400).json({ errors: [{ msg: error.details[0].message }] });
  }
  next();
};

// Middleware to validate id parameter
const validateIdParam = (req, res, next) => {
  const { error } = idSchema.validate(req.params.id);
  if (error) {
    return res.status(400).json({ errors: [{ msg: error.details[0].message }] });
  }
  next();
};

// Middleware to check for validation errors
const checkValidationResult = (req, res, next) => {
  // This middleware is redundant with Joi validation as we handle errors immediately
  next();
};

module.exports = {
  validateEmail,
  validateZipCode,
  validateIdParam,
  checkValidationResult,
};
