const Captures = require('../models/captures.js')
const Users = require('../models/users.js')
const UsersConf = require('./users.js')
const metaTags = require('./metaTags.js')

module.exports = {
  async postCapture(req, res) {
    try {
      let capturedTags = await metaTags.getMetaTags(req.body.capturedUrl)
      let userId = await UsersConf.getUserId(req.body.email)
      const CAPTURE_MODEL = {
        userId: userId,
        capturedUrl: req.body.capturedUrl,
        momentOfCapture: req.body.momentOfCapture,
        capturedTags: capturedTags
      };
      try {
        Captures.create(CAPTURE_MODEL).then(function (capture){
          return res.status(201).json(capture);
        })
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async getCapture(req, res) {
    try {
      let email = req.query.email;
      let limit = req.query.limit;
      let offset = req.query.offset;
      try {
        Captures.findAll({ 
          include: [{ 
            model: Users,                      
            where:{email : email},
            attributes: []
          }],
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
