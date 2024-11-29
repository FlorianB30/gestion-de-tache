const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const TaskState = require('./taskState');
const User = require('./user');

const Task = sequelize.define('Task', {
    task_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING(50), allowNull: false },
    description: { type: DataTypes.STRING(100) },
    priority: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    deadline: { type: DataTypes.DATE },
    created_date: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    task_states_id: {
        type: DataTypes.INTEGER,
        references: { model: TaskState, key: 'task_states_id' },
    },
    user_id: { type: DataTypes.INTEGER, references: { model: User, key: 'user_id' } },
    project_id: {
        type: DataTypes.INTEGER,
        references: { model: Project, key: 'project_id' },
    },
    time_expected: { type: DataTypes.FLOAT, allowNull: false },
    time_done: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0 },
});

Task.associate = (models) => {
    Task.belongsTo(models.Project, { foreignKey: 'project_id' });
    Task.belongsTo(models.User, { foreignKey: 'user_id' });
    Task.belongsTo(models.TaskState, { foreignKey: 'task_states_id' });
};

module.exports = Task;
