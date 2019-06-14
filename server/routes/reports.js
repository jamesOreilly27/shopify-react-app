const router = require('express').Router()
const axios = require('axios')
const baseUrl = require('./baseUrl')

router.get('/all', (req, res, next) => {
  axios.get(`${baseUrl}/reports.json`)
  .then(res => res.data)
  .then(reports => res.json(reports))
  .catch(console.error)
})

module.exports = router
