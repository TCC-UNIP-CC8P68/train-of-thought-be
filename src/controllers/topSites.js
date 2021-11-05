const TopSites = require('../models/topSites');

module.exports = {
  async getTopSites(req, res) {
    try {
      TopSites.findOne({
        where: {userId: req.query.userId},
        attributes: ['topSites']
    }).then(function(topSites) {
        return res.status(200).json(topSites);
      });
    } catch(error) {
      return res.send(500).json(error);
    }
  }
}
