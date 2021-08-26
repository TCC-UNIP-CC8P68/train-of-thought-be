const Captures = require('../models/captures.js')

module.exports = {
  async postCapture(req, res) {
    try {
      const CAPTURE_MODEL = {
        capturedUrl: req.body.capturedUrl
      };
      try {
        const capture = await Captures.create(CAPTURE_MODEL);
        console.log('Url registrada');
        return res.status(201).json(capture);
      } catch (error) {
        return res.status(500).json(error);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async getCapture(req, res) {
    console.log("rota get");

    res.send("get captures");
  }
}
