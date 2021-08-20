module.exports = {
  async postCapture(req, res) {
    const capturedUrl = req.body.capturedUrl;

    console.log(req.body.capturedUrl);

    res.send(capturedUrl);
  },

  async getCapture(req, res) {
    console.log("rota get");

    res.send("get captures");
  }
}
