const { userSchema } = require('../utils/validations');

const validateCreation = async (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  
  if (error) {
    const message = error.details[0].message;
    return res.status(400).json({ message });
  }
  
  next();
};

module.exports = validateCreation;