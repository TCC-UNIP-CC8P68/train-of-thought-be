const Users = require('../models/users.js')

module.exports = {
  async postUser(req, res) {
    try {
      const USER_MODEL = {
        name: req.body.name
      };
      try {
        const user = await Users.create(USER_MODEL);
        return res.status(201).json(user);
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
}
