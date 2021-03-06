const Configurations = require('../models/configurations.js')
const Users = require('../models/users.js')
const UsersConf = require('./users.js')


module.exports = {
  async putConfigurationTimeout(req, res) {
    UsersConf.getUserId(req.body.email).then(function (userId){
      try {
        const CONFIGURATION_MODEL = {
          userId: userId,
          timeoutValue: req.body.timeoutValue,
          setBy: req.body.setBy
        };  
        try {
          Configurations.update(CONFIGURATION_MODEL, {
            where: { userId: userId },
            returning: true
          }).then(function (configuration){
            return res.status(201).json(configuration[1]);
          })
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        return res.status(500).json(error);
      }
    })
  }
}
