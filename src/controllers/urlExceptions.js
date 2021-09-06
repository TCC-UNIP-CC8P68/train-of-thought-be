const UrlExceptions = require('../models/urlExceptions.js')
const { Op } = require("sequelize");
const Users = require('../models/users.js')
const UsersConf = require('./users.js')

module.exports = {
  async postUrlException(req, res) {
    UsersConf.getUserId(req.body.email).then(function (userId){
      try {
        const URL_EXCEPTION_MODEL = {
          userId: userId,
          url: req.body.url
        };
        try {
          UrlExceptions.create(URL_EXCEPTION_MODEL).then(function (urlException){
            return res.status(201).json(urlException);
          })
        } catch (error) {
          return res.status(500).json(error);
        }
      } catch (error) {
        return res.status(500).json(error);
      }
    })
  },

  async getUrlException(req, res) {
    try {
      let email = req.query.email;
      try {
        UrlExceptions.findAndCountAll({
          include: [{ 
            model: Users,                      
            where:{email : email},
            attributes: []
          }],
          attributes: ['url'] 
        }).then(function(urls) {
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
      let email = req.query.email;
      let url = req.query.url;
      try {
        UrlExceptions.findAndCountAll({
          where: {url: {[Op.like]: '%'+url+'%'}},
          attributes: ['url'],
          include: [{
            model: Users,
            where:{email : email},
            attributes: []
          }]
        }).then(function(urls) {
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
