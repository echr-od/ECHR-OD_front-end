var express = require('express');
const { api } = require('../lib/axios'); 
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).send({
    data: {endpoints: ['/stats', '/version']}
  })
});

router.get('/stats', async function(req, res, next) {
  try {
    const response = await api.get(`/stats`);
    const data = response.data;

    res.status(200).send(data)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/version', async function(req, res, next) {
  try {
    const response = await api.get(`/stats`);
    const data = response.data;

    res.status(200).send(data)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
