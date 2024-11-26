const db = require('../config/db');

const Task = {
  create: async (title, description, priority, deadline, task_states_id, user_id) => {
    const sql = `
      INSERT INTO Tasks (title, description, priority, deadline, task_states_id, user_id, created_date) 
      VALUES (?, ?, ?, ?, ?, ?, NOW())
    `;
    return db.promise().query(sql, [title, description, priority, deadline, task_states_id, user_id]);
  },

  findAll: async () => {
    const sql = `
      SELECT t.*, ts.name AS state_name 
      FROM Tasks t
      JOIN TaskStates ts ON t.task_states_id = ts.task_states_id
    `;
    return db.promise().query(sql);
  },

  findById: async (id) => {
    const sql = `
      SELECT t.*, ts.name AS state_name 
      FROM Tasks t
      JOIN TaskStates ts ON t.task_states_id = ts.task_states_id
      WHERE t.task_id = ?
    `;
    return db.promise().query(sql, [id]);
  },

  update: async (id, updates) => {
    const { title, description, priority, deadline, task_states_id } = updates;
    const sql = `
      UPDATE Tasks 
      SET title = ?, description = ?, priority = ?, deadline = ?, task_states_id = ? 
      WHERE task_id = ?
    `;
    return db.promise().query(sql, [title, description, priority, deadline, task_states_id, id]);
  },

  delete: async (id) => {
    const sql = 'DELETE FROM Tasks WHERE task_id = ?';
    return db.promise().query(sql, [id]);
  },
};

module.exports = Task;
