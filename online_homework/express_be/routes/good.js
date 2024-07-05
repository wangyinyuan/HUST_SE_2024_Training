const express = require('express');
const router = express.Router();
const goodService = require('../services/good');

router.post('/add', async (req, res) => {
  try {
    const good = await goodService.addGood(req.body);
    res.status(201).send(good);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get('/search', async (req, res) => {
  try {
    const { name } = req.query;
    const goods = await goodService.searchGoods(name);
    res.send(goods);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;