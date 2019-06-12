const dotenv = require('dotenv').config()

const baseUrl = `https://${process.env.SHOPIFY_API_KEY}:${process.env.PASSWORD}@dbny-code-test.myshopify.com/admin/api/2019-04`

module.exports = baseUrl
