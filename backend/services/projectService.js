const { Project, User, ProjectState, Task, TaskState } = require('../models');
const { Op } = require('sequelize');

const createProject = async (projectData) => {
    return await Project.create(projectData);
};

const getProjects = async (userId) => {
    return await Project.findAll({
        include: [
            {
                model: User,
                attributes: ['user_id', 'mail'],
            },
            {
                model: ProjectState,
                attributes: ['project_states_id', 'name'],
            },
            {
                model: Task,
                as: 'Tasks',
                attributes: ['task_id', 'user_id', 'project_id', 'title', 'created_date', 'description', 'priority', 'deadline', 'time_expected', 'time_done'],
                separate: true,
                order: [['priority', 'ASC']],
                include: [
                    {
                        model: TaskState,
                        attributes: ['task_states_id', 'name'],
                    },
                ],
            },
        ],
        where: {
            [Op.or]: [
                { user_id: userId },
                // { '$Tasks.user_id$': userId },
            ],
        },
    });
};

const updateProject = async (projectId, updates) => {
    const project = await Project.findByPk(projectId);
    if (!project) throw { status: 404, message: 'Project not found' };
    return await project.update(updates);
};

const deleteProject = async (projectId) => {
    const project = await Project.findByPk(projectId);
    if (!project) throw { status: 404, message: 'Project not found' };
    await project.destroy();
};

module.exports = { createProject, getProjects, updateProject, deleteProject };
