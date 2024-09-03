const jwt = require('jsonwebtoken');

const TOKEN_SECRET = 'jwt_secret';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const createToken = (email) => {
  const data = { email };
  const token = jwt.sign(data, TOKEN_SECRET, JWT_CONFIG);
  return token;
}

module.exports = createToken;