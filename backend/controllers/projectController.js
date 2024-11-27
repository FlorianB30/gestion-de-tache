const projectService = require('../services/projectService.js');

const createProject = async (req, res, next) => {
    try {
        const project = await projectService.createProject(req.body);
        res.status(201).json(project);
    } catch (err) {
        next(err);
    }
};

const getProjects = async (req, res, next) => {
    try {
        const projects = await projectService.getProjects();
        res.json(projects);
    } catch (err) {
        next(err);
    }
};

const updateProject = async (req, res, next) => {
    try {
        const project = await projectService.updateProject(req.params.id, req.body);
        res.json(project);
    } catch (err) {
        next(err);
    }
};

const deleteProject = async (req, res, next) => {
    try {
        await projectService.deleteProject(req.params.id);
        res.status(204).send();
    } catch (err) {
        next(err);
    }
};

module.exports = { createProject, getProjects, updateProject, deleteProject };
