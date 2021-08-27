const Configurations = require('../models/configurations.js')

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

}
