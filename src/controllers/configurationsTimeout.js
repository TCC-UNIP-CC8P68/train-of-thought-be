const Configurations = require('../models/configurations.js')
const Users = require('../models/users.js')
const UsersConf = require('./users.js')


module.exports = {
  async postConfigurationTimeout(req, res) {
    UsersConf.getUserId(req.body.email).then(function (userId){
      try {
        const CONFIGURATION_MODEL = {
          userId: userId,
          timeoutValue: req.body.timeoutValue,
          setBy: req.body.setBy
        };
        try {
          Configurations.create(CONFIGURATION_MODEL).then(function (configuration){
            return res.status(201).json(configuration);
          })
        } catch (error) {
          return res.status(500).json(error);
        }
      } catch (error) {
        return res.status(500).json(error);
      }
    })
  },

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
            where: { userId: userId } 
          }).then(function (configuration){
            return res.status(201).json(configuration);
          })
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        return res.status(500).json(error);
      }
    })
  },

  async getConfigurationTimeout(req, res) {
    try {
      let email = req.query.email;
      try {
        Configurations.findAll({
          include: [{ 
            model: Users,                      
            where:{email : email},
            attributes: []
          }],
          attributes: ['timeoutValue']
        }).then(function(userConfig) {
          return res.status(200).json(userConfig);
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
