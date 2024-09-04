const { loginSchema } = require('../utils/validations');

const validadeLogin = async (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    const message = error.details[0].message;
    return res.status(400).json({ message })
  }

  next();
};

module.exports = validadeLogin;