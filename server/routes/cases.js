var express = require('express');
const axios = require('axios');
var router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const response = await axios.get(`https://echr-opendata.eu/api/v1/cases?page=${page}&limit=${limit}`);
    const data = response.data;
    res.status(200).send(data)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:itemid/docs', async function(req, res, next) {
  try {
    const itemid = req.params.itemid;
    const response = await axios.get(`https://echr-opendata.eu/api/v1/cases/${itemid}/docs`);
    const data = response.data;

    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:itemid/docs/:doctype', async function(req, res, next) {
  try {
    const itemid = req.params.itemid;
    const doctype = req.params.doctype;
    const response = await axios.get(`https://echr-opendata.eu/api/v1/cases/${itemid}/docs/${doctype}`);
    const data = response.data;

    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// TODO: not work
// router.get('/:itemid/entities/', async function(req, res, next) {
//   try {
//     const itemid = req.params.itemid;
//     const response = await axios.get(`https://echr-opendata.eu/api/v1/cases/${itemid}/entities`);
//     const data = response.data;

//     console.log(data);
//     res.status(200).send(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

router.get('/:itemid', async function(req, res, next) {
  try {
    const itemid = req.params.itemid;
    const response = await axios.get(`https://echr-opendata.eu/api/v1/cases/${itemid}`);
    const data = response.data;

    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:itemid/citedapps', async function(req, res, next) {
  try {
    const itemid = req.params.itemid;
    const response = await axios.get(`https://echr-opendata.eu/api/v1/cases/${itemid}/citedapps`);
    const data = response.data;

    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
