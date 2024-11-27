const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    user_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    mail: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    password: { type: DataTypes.CHAR(60), allowNull: false },
    created_date: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
});

module.exports = User;
