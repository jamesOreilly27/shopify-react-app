// const dotenv = require('dotenv')
const express = require('express')
const router = express.Router()
const products = require('./products')
const customers = require('./customers')
const orders = require('./orders')
const reports = require('./reports')
const collections = require('./collections')

router.use('/products', products)
router.use('/customers', customers)
router.use('/orders', orders)
router.use('/reports', reports)
router.use('/collections', collections)


module.exports = router
