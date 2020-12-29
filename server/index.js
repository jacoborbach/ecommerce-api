const express = require('express')
const products = require('../products.json')
const getProducts = require('./getProducts');

const app = express()

const port = 3002

app.get('/api/products', getProducts)

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})