const express = require('express');
const router = express.Router();
const UserService = require('../services/userService');

router.post('/', async (req, res) => {
  try {
    const { mail, password } = req.body;
    const userId = await UserService.createUser(mail, password);
    res.status(201).json({ userId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
