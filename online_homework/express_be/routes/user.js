const express = require('express');
const router = express.Router();
const userService = require('../services/user');
const tokenHandler = require('./middleware/tokenHandler');

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await userService.register({ username, password });
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await userService.login(username, password);
    res.send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/add-to-cart', tokenHandler.verifyToken, async (req, res) => {
  try {
    const { goodId } = req.body;
    const user = await userService.addToCart(req.user.id, goodId);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/cart', tokenHandler.verifyToken, async (req, res) => {
  try {
    const cart = await userService.getCart(req.user.id);
    res.send(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;