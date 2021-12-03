const WordClouds = require('../models/wordCloud');

module.exports = {
  async getWordCloud(req, res) {
    console.log(req.query.email);
    try {
      WordClouds.findOne({
        where: {email: req.query.email},
        attributes: ['wordCloud']
      }).then(function(topSites) {
        return res.status(200).json(topSites);
      });
    } catch(error) {
      res.status(500).json(error);
    }
  }
}
