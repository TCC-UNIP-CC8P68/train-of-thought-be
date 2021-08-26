const Captures = require('../models/captures.js')

module.exports = {
  async postCapture(req, res) {
    try {
      const CAPTURE_MODEL = {
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
    console.log("rota get");

    res.send("get captures");
  }
}
