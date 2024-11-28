// Dans userService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const register = async (mail, password) => {
    // const hashedPassword = await bcrypt.hash(password, 60);
    // return await User.create({ mail, password: hashedPassword });
    return await User.create({ mail, password });
};

const login = async (mail, password) => {
    const user = await User.findOne({ where: { mail } });
    if (!user) throw { status: 404, message: 'User not found' };

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw { status: 401, message: 'Invalid credentials' };

    const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, user };
};

module.exports = { register, login };
