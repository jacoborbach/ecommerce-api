const express = require('express')
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express()

const port = 3002

app.get('/api/products', getProducts)
app.get('/api/products/:id', getProducts)

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})