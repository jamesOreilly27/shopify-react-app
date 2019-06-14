const router = require('express').Router()
const axios = require('axios')
const baseUrl = require('./baseUrl')

router.get('/all', (req, res, next) => {
  axios.get(`${baseUrl}/orders.json`)
  .then(res => res.data)
  .then(orders => res.json(orders))
  .catch(console.error)
})

module.exports = router
