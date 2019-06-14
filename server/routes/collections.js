const router = require('express').Router()
const axios = require('axios')
const baseUrl = require('./baseUrl')

router.get('/custom/all', (req, res, next) => {
  axios.get(`${baseUrl}/custom_collections.json`)
  .then(res => res.data)
  .then(collections => res.json(collections))
  .catch(console.error)
})

router.get('/smart/all', (req, res, next) => {
  axios.get(`${baseUrl}/smart_collections.json`)
  .then(res => res.data)
  .then(collections => res.json(collections))
  .catch(console.error)
})

module.exports = router
