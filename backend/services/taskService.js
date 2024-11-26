const Task = require('../models/task');

const TaskService = {
  createTask: async (taskData) => {
    const { title, description, priority, deadline, task_states_id, user_id } = taskData;
    const [result] = await Task.create(title, description, priority, deadline, task_states_id, user_id);
    return result.insertId;
  },

  getAllTasks: async () => {
    const [tasks] = await Task.findAll();
    return tasks;
  },

  getTaskById: async (id) => {
    const [task] = await Task.findById(id);
    return task[0]; // Retourne la tâche trouvée
  },

  updateTask: async (id, updates) => {
    await Task.update(id, updates);
  },

  deleteTask: async (id) => {
    await Task.delete(id);
  },
};

module.exports = TaskService;
