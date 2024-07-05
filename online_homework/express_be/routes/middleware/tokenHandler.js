const jwt = require('jsonwebtoken');
const key = require('../../config/key')

const secret = key;

const tokenHandler = {
  generateToken: (user) => {
    return jwt.sign({ id: user._id, username: user.username }, secret, { expiresIn: '1h' });
  },
  verifyToken: (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(403).send('A token is required for authentication');
    }
    try {
      const decoded = jwt.verify(token, secret);
      req.user = decoded;
    } catch (err) {
      return res.status(401).send('Invalid Token');
    }
    return next();
  }
};

module.exports = tokenHandler;