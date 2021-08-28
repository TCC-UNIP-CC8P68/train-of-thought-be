const Captures = require('../models/captures.js')

module.exports = {
  async postCapture(req, res) {
    try {
      const CAPTURE_MODEL = {
        userId: req.body.userId,
        capturedUrl: req.body.capturedUrl,
        momentOfCapture: req.body.momentOfCapture
      };
      try {
        const capture = await Captures.create(CAPTURE_MODEL);
        return res.status(201).json(capture);
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async getCapture(req, res) {
    try {
      let userId = req.query.userId;
      let limit = req.query.limit;
      let offset = req.query.offset;
      try {
        Captures.findAll({ 
          where: {userId: userId},
          limit: limit,
          offset: offset
        }).then(function(userConfig) {
          return res.status(200).json(userConfig);
        });
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
