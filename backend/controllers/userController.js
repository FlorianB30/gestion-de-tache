const userService = require('../services/userService');

const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (err) {
    next(err)
  }
}

const register = async (req, res, next) => {
  try {
    const { mail, password } = req.body;
    const user = await userService.register(mail, password);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { mail, password } = req.body;
    const { token, user } = await userService.login(mail, password);
    res.json({ token, user });
  } catch (err) {
    next(err);
  }
};

module.exports = { getUsers, register, login };
