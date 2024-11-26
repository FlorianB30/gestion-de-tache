const User = require('../models/user');

const UserService = {
  createUser: async (mail, password) => {
    const [result] = await User.create(mail, password);
    return result.insertId;
  },

  getAllUsers: async () => {
    const [users] = await User.findAll();
    return users;
  },

  findUserByEmail: async (mail) => {
    const [user] = await User.findByEmail(mail);
    return user[0]; // Retourne le premier utilisateur trouvé
  },
};

module.exports = UserService;
