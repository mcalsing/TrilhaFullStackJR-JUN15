const { projectSchema } = require('../utils/validations');

const validadeProject = async (req, res, next) => {
  const { error } = projectSchema.validate(req.body);

  if (error) {
    const message = error.details[0].message;
    return res.status(400).json({ message })
  }

  next();
};

module.exports = validadeProject;