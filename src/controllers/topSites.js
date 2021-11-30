const TopSites = require('../models/topSites');

module.exports = {
  async getTopSites(req, res) {
    try {
      TopSites.findOne({
        where: {email: req.query.email},
        attributes: ['topSites']
      }).then(function(topSites) {
        return res.status(200).json(topSites);
      });
    } catch(error) {
      return res.status(500).json(error);
    }
  }
}
