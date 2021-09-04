const Configurations = require('../models/configurations.js')
const Users = require('../models/users.js')


module.exports = {
  async postConfiguration(req, res) {
    try {
      const CONFIGURATION_MODEL = {
        userId: req.body.userId,
        timeoutValue: req.body.timeoutValue,
        setBy: req.body.setBy
      };
      try {
        const configuration = await Configurations.create(CONFIGURATION_MODEL);
        return res.status(201).json(configuration);
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async putConfiguration(req, res) {
    try {
      const CONFIGURATION_MODEL = {
        userId: req.body.userId,
        timeoutValue: req.body.timeoutValue,
        setBy: req.body.setBy
      };  
      try {
        const configuration = await Configurations.update(CONFIGURATION_MODEL, { where: { userId: req.query.userId } });
        return res.status(200).json(configuration);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async getConfiguration(req, res) {
    try {
      let email = req.query.email;
      try {
        Configurations.findAll({ 
          include: [{ 
            model: Users,                      
            where:{email : email}
          }]
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
