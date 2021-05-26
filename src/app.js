const express = require('express');
const morgan = require('morgan');
const restaurantsRouter = require('./routes/restaurantsRoutes')

const app = express();

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res)=> {
    res.send("Hello")
})

app.use('/api/restaurants', restaurantsRouter)
module.exports = app;