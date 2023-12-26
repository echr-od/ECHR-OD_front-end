var express = require('express');
const axios = require('axios');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).send({
    data: {endpoints: ['/stats', '/version']}
  })
});

router.get('/stats', async function(req, res, next) {
  try {
    const response = await axios.get(`https://echr-opendata.eu/api/v1/stats`);
    const data = response.data;

    res.status(200).send(data)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/version', async function(req, res, next) {
  try {
    const response = await axios.get(`https://echr-opendata.eu/api/v1/stats`);
    const data = response.data;

    res.status(200).send(data)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
