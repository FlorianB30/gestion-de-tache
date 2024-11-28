const express = require('express');
const { getUsers, register, login } = require('../controllers/userController.js');

const router = express.Router();

router.get('/', getUsers)
router.post('/register', register);
router.post('/login', login);

module.exports = router;
