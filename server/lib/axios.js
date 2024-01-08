const axios = require('axios');

const api = axios.create({
  baseURL: 'https://echr-opendata.eu/api/v1',
})

module.exports = { api } 