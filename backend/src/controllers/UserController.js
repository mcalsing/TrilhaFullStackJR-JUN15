const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const { userSchema } = require('../utils/validations');
const createToken = require('../utils/generateToken');


module.exports = {

  async getAll(_req, res) {
    const data = await User.find();

    return res.json(data);
  },

  async create(req, res) {
    const { firstName, lastName, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const encryptedPass = await bcrypt.hash(password, salt);

    const userCreated = await User.create({ firstName, lastName, email, password: encryptedPass });

    return res.json(userCreated);
  },

  async delete(req, res) {
    const { id } = req.params;
    if (id.length !== 24) {
      return res.status(401).json({ message: "ID deve ter 24 characters"})
    }

    const deleteUser = await User.findByIdAndDelete(id);

    if (deleteUser) {
      return res.json(deleteUser);
    }

    return res.status(404).json({ message: "Registro não encontrado!" });
  },

  async login(req, res) {
    const {email, password} = req.body;

    const user = await User.findOne({ email: email });

    if (user?.email !== email || !bcrypt.compareSync(password, user?.password)) {
      return res.status(401).json({message: '"email" or "password" are incorrect!'})
    }

    const token = createToken(email);
    return res.json({id: user._id, token: token, user: user.firstName,})
  },

  async getById(req, res) {
    const id = req.params.id

    try {
      const user = await User.findById(id, '-password')

    return res.json({ user })

    } catch (error) {
      return res.status(401).json({message: "Algo deu errado"})
    }
  }
};