const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

module.exports = {

  async create(req, res) {
    const { firstName, lastName, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const encryptedPass = await bcrypt.hash(password, salt);

    const userCreated = await User.create({ firstName, lastName, email, password: encryptedPass });

    return res.json(userCreated);
  }




};