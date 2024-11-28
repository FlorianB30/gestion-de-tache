const { Project, User, ProjectState, Task } = require('../models');

const createProject = async (projectData) => {
    return await Project.create(projectData);
};

const getProjects = async () => {
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
                attributes: ['task_id', 'project_id', 'title', 'created_date', 'description', 'priority', 'deadline', 'time_expected', 'time_done'],
            },
        ],
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
