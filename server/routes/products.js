const router = require('express').Router()
const axios = require('axios')
const baseUrl = require('./baseUrl')

router.get('/all', (req, res, next) => {
  axios.get(`${baseUrl}/products.json`)
  .then(res => res.data)
  .then(products => res.json(products))
  .catch(console.error)
})

module.exports = router
