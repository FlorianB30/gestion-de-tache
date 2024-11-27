const sequelize = require('../config/db.js');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    mail: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.CHAR(60), allowNull: false },
    created_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

const TaskState = sequelize.define('TaskState', {
    task_states_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const ProjectState = sequelize.define('ProjectState', {
    project_states_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Task = sequelize.define('Task', {
    task_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    priority: { type: DataTypes.INTEGER },
    deadline: { type: DataTypes.DATE },
    created_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    task_states_id: { type: DataTypes.INTEGER, allowNull: false },
    user_id: { type: DataTypes.INTEGER },
});

const Project = sequelize.define('Project', {
    project_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    created_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    project_states_id: { type: DataTypes.INTEGER, allowNull: false },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
});

Task.belongsTo(User, { foreignKey: 'user_id' });
Task.belongsTo(TaskState, { foreignKey: 'task_states_id' });
Project.belongsTo(User, { foreignKey: 'user_id' });
Project.belongsTo(ProjectState, { foreignKey: 'project_states_id' });

module.exports = { sequelize, User, Task, TaskState, Project, ProjectState };
