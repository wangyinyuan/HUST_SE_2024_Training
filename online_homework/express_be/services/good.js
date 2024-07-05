const Good = require('../models/good');

const addGood = async (goodData) => {
  const good = new Good(goodData);
  await good.save();
  return good;
};

const searchGoods = async (name) => {
  const goods = await Good.find({ name: new RegExp(name, 'i') });
  return goods;
};

module.exports = {
  addGood,
  searchGoods
};