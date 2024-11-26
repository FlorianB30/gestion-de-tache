const db = require('../config/db');

const User = {
  create: async (mail, password) => {
    const sql = 'INSERT INTO Users (mail, password, created_date) VALUES (?, ?, NOW())';
    return db.promise().query(sql, [mail, password]);
  },

  findByEmail: async (mail) => {
    const sql = 'SELECT * FROM Users WHERE mail = ?';
    return db.promise().query(sql, [mail]);
  },

  findAll: async () => {
    const sql = 'SELECT * FROM Users';
    return db.promise().query(sql);
  },
};

module.exports = User;
