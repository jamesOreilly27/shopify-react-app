const dotenv = require('dotenv')
const express = require('express')
const router = express.Router()
const products = require('./products')
const customers = require('./customers')
const orders = require('./orders')

router.use('/products', products)
router.use('/customers', customers)
router.use('/orders', orders)

module.exports = router
