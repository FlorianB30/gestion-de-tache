const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TaskState = sequelize.define('TaskState', {
    task_states_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(50), allowNull: false, unique: true },
});

TaskState.associate = (models) => {
    TaskState.hasMany(models.Task, { foreignKey: 'task_states_id' });
};

module.exports = TaskState;
