const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root', 
  password: 'yourpassword', 
  database: 'task_manager', 
});

db.getConnection((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err.message);
  } else {
    console.log('Connecté à la base de données.');
  }
});

module.exports = db;
