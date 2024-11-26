const express = require('express');
const router = express.Router();
const db = require('../config/bd');

// Récupérer toutes les tâches
router.get('/tasks', async (req, res) => {
  try {
    const [tasks] = await db.promise().query('SELECT * FROM Tasks');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ajouter une tâche
router.post('/tasks', async (req, res) => {
  const { title, description, priority, deadline, task_states_id, user_id } = req.body;
  try {
    const [result] = await db
      .promise()
      .query(
        'INSERT INTO Tasks (title, description, priority, deadline, task_states_id, user_id, created_date) VALUES (?, ?, ?, ?, ?, ?, NOW())',
        [title, description, priority, deadline, task_states_id, user_id]
      );
    res.status(201).json({ task_id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Autres routes : mise à jour, suppression

/**
 * const express = require('express');
const router = express.Router();
const TaskService = require('../services/taskService');

router.post('/', async (req, res) => {
  try {
    const taskId = await TaskService.createTask(req.body);
    res.status(201).json({ taskId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const tasks = await TaskService.getAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const task = await TaskService.getTaskById(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    await TaskService.updateTask(req.params.id, req.body);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await TaskService.deleteTask(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

 */