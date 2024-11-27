const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ProjectState = sequelize.define('ProjectState', {
    project_states_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(50), allowNull: false, unique: true },
});

module.exports = ProjectState;
