const router = require('express').Router()
const axios = require('axios')
const baseUrl = require('./baseUrl')

router.get('/all', (req, res, next) => {
  axios.get(`${baseUrl}/customers.json`)
  .then(res => res.data)
  .then(customers => res.json(customers))
  .catch(console.error)
})

module.exports = router
