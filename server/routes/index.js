const dotenv = require('dotenv')
const express = require('express')
const router = express.Router()
const products = require('./products')
const customers = require('./customers')

router.use('/products', products)
router.use('/customers', customers)

module.exports = router
