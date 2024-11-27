const { Project, User, ProjectState } = require('../models');

const createProject = async (projectData) => {
    return await Project.create(projectData);
};

const getProjects = async () => {
    return await Project.findAll({ include: [User, ProjectState] });
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
