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

router.get('/custom/:id', (req, res, next) => {
  axios.get(`${baseUrl}/custom_collections/${req.params.id}.json`)
  .then(res => res.data)
  .then(collection => res.json(collection))
  .catch(console.error)
})

router.get('/:id/products', (req, res, next) => {
  const id = req.params.id
  axios.get(`${baseUrl}/collects.json?collection_id=${id}`)
  .then(res => res.data)
  .then(collection => res.json(collection))
  .catch(console.error)
})

module.exports = router
