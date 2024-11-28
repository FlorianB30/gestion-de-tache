const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const ProjectState = require('./projectState');
const User = require('./user');

const Project = sequelize.define('Project', {
    project_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(50), allowNull: false },
    created_date: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    project_states_id: {
        type: DataTypes.INTEGER,
        references: { model: ProjectState, key: 'project_states_id' },
    },
    user_id: { type: DataTypes.INTEGER, references: { model: User, key: 'user_id' } },
});

Project.associate = (models) => {
    Project.belongsTo(models.User, { foreignKey: 'user_id' });
    Project.belongsTo(models.ProjectState, { foreignKey: 'project_states_id' });
    Project.hasMany(models.Task, { foreignKey: 'project_id', as: 'Tasks' });
};

module.exports = Project;
