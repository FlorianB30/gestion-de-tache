const { Task, User, TaskState } = require('../models');

const createTask = async (taskData) => {
    return await Task.create(taskData);
};

const getTasks = async () => {
    return await Task.findAll({ include: [User, TaskState] });
};

const updateTask = async (taskId, updates) => {
    const task = await Task.findByPk(taskId);
    if (!task) throw { status: 404, message: 'Task not found' };
    return await task.update(updates);
};

const deleteTask = async (taskId) => {
    const task = await Task.findByPk(taskId);
    if (!task) throw { status: 404, message: 'Task not found' };
    await task.destroy();
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
