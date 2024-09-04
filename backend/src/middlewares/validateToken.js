const jwt = require('jsonwebtoken');

const TOKEN_SECRET = 'jwt_secret';

const verifyToken = async (req, res, next) => {
  const tokenBearer = req.headers.authorization;
  const token = tokenBearer && tokenBearer.split(" ")[1]
 
  try {
    if (!token) {
    return res.status(401).json({error : 'Token não encontrado!'})

    }
    jwt.verify(token, TOKEN_SECRET);

    next();

  } catch (error) {
    return res.status(401).json({error: "Forneça um token válido"})
  }
}

module.exports = verifyToken