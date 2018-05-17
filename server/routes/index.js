const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/rss", async (req, res) => {
  console.log("getting url", req.query.url);
  const response = await axios.get(req.query.url);
  res.send(response.data);
});

module.exports = router;
