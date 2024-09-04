const jwt = require('jsonwebtoken');

const TOKEN_SECRET = 'jwt_secret';

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (!token) {
    return res.status(401).json({error : 'Token não encontrado!'})
    }
  
    const decodeToken = jwt.verify(token, TOKEN_SECRET);
    return res.json({login: true, data: decodeToken})

    next();

  } catch {
    return res.status(401).json({error: "Forneça um token válido"})
  }
}

module.exports = verifyToken