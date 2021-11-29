const WordClouds = require('../models/wordCloud');

module.exports = {
  async getWordCloud(req, res) {
    try {
      WordClouds.findOne({
        where: {userId: req.query.userId},
        attributes: ['wordCloud']
      }).then(function(topSites) {
        return res.status(200).json(topSites);
      });
    } catch(error) {
      res.status(500).json(error);
    }
  }
}
