const express = require('express');
const router = express.Router();
const { createProject, getProjects, updateProject, deleteProject } = require('../controllers/projectController.js');

router.post('/', createProject);
router.get('/myprojects/:userId', getProjects);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
