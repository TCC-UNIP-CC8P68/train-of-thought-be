const UrlExceptions = require('../models/urlExceptions.js')
const { Op } = require("sequelize");

module.exports = {
  async postUrlException(req, res) {
    try {
      const URL_EXCEPTION_MODEL = {
        userId: req.body.userId,
        url: req.body.url
      };
      try {
        const urlException = await UrlExceptions.create(URL_EXCEPTION_MODEL);
        return res.status(201).json(urlException);
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async getUrlException(req, res) {
    try {
      let userId = req.query.userId;
      try {
        UrlExceptions.findAndCountAll({ where: {userId: userId}, attributes: ['url'] }).then(function(urls) {
          return res.status(200).json(urls);
        });
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async verifyUrlException(req, res) {
    try {
      let userId = req.query.userId;
      let url = req.query.url;
      try {
        UrlExceptions.findAndCountAll({ where: {userId: userId, url: {[Op.like]: '%'+url+'%'}}, attributes: ['url'] }).then(function(urls) {
          return res.status(200).json(urls);
        });
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
