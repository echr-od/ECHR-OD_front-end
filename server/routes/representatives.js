var express = require('express');
const { api } = require('../lib/axios'); 
var router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const response = await api.get(`/representatives?page=${page}&limit=${limit}`);
    const data = response.data;

    res.status(200).send(data)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:itemid', async function(req, res, next) {
  try {
    const itemid = req.params.itemid;
    const response = await api.get(`/representatives/${itemid}`);
    const data = response.data;

    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
