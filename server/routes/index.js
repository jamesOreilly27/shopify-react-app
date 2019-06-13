const dotenv = require('dotenv')
const express = require('express')
const router = express.Router()
const products = require('./products')

// const baseUrl = `https://${process.env.SHOPIFY_API_KEY}:${process.env.PASSWORD}@dbny-code-test.myshopify.com/admin/api/2019-04`

router.use('/products', products)

module.exports = router
