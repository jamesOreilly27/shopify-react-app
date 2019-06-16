const router = require('express').Router()
const axios = require('axios')
const baseUrl = require('./baseUrl')

router.get('/products/:id', (req, res, next) => {
  const id = req.params.id
  const productIds = []
  axios.get(`${baseUrl}/collects.json?collection_id=${id}`)
  .then(res => {
    res.data.collects.forEach(collect => {
      productIds.push(collect.product_id)
    })
    return productIds
  })
  .then(idArray => axios.get(`${baseUrl}/products.json?ids=${idArray.toString()}`))
  .then(res => res.data.products)
  .then(products => res.json(products))
  .catch(console.error)
})

router.get('/:type/all', (req, res, next) => {
  axios.get(`${baseUrl}/${req.params.type}_collections.json`)
  .then(res => res.data)
  .then(collections => res.json(collections))
  .catch(console.error)
})

router.get('/:type/:id', (req, res, next) => {
  axios.get(`${baseUrl}/${req.params.type}_collections/${req.params.id}.json`)
  .then(res => res.data)
  .then(collection => res.json(collection))
  .catch(console.error)
})

module.exports = router
