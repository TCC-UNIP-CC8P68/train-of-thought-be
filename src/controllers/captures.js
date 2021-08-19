module.exports = {
    async captures(req, res) {
        const capturedUrl = req.body.capturedUrl;

        res.send(capturedUrl);
    }
}
