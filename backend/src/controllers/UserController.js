const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const { userSchema } = require('../middlewares/validations');

module.exports = {

  async getAll(_req, res) {
    const data = await User.find();

    return res.json(data);
  },

  async create(req, res) {
    const { firstName, lastName, email, password } = req.body;

    const { error } = userSchema.validate(req.body);

    if (error) {
      const erro = error.details[0].message;
      return res.status(400).json({ erro });
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPass = await bcrypt.hash(password, salt);

    const userCreated = await User.create({ firstName, lastName, email, password: encryptedPass });

    return res.json(userCreated);
  },

  async delete(req, res) {
    const { id } = req.params;
    if (id.length !== 24) {
      return res.status(401).json({ error: "ID deve ter 24 characters"})
    }

    const deleteUser = await User.findByIdAndDelete(id);

    if (deleteUser) {
      return res.json(deleteUser);
    }

    return res.status(401).json({ error: "Registro não encontrado!" });
  }
};