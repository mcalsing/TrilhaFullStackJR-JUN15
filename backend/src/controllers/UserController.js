const User = require('../models/UserModel');

module.exports = {

  async create(req, res) {
    const { firstName, lastName, email, password } = req.body;
    
    const userCreated = await User.create({ firstName, lastName, email, password });

    return res.json(userCreated);
  }




};