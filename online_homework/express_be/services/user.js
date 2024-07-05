const User = require('../models/user');
const tokenHandler = require('../routes/middleware/tokenHandler');

const register = async (userData) => {
  const user = new User(userData);
  await user.save();
  const token = tokenHandler.generateToken(user);
  return { user, token };
};

const login = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user || !await user.comparePassword(password)) {
    throw new Error('Invalid username or password');
  }
  const token = tokenHandler.generateToken(user);
  return { user, token };
};

const addToCart = async (userId, goodId) => {
  const user = await User.findById(userId);
  user.cart.push(goodId);
  await user.save();
  return user;
};

const getCart = async (userId) => {
  const user = await User.findById(userId).populate('cart');
  return user.cart;
};

module.exports = {
  register,
  login,
  addToCart,
  getCart
};