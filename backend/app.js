const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');
const projectRoutes = require('./routes/projects');
const { sequelize, User, Task, TaskState, ProjectState, Project } = require('./models/index.js');

const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);

// Synchroniser la base de données
sequelize.sync()
    .then(() => console.log('Database synced successfully.'))
    .catch(err => console.error('Database sync failed:', err.message, err));

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
