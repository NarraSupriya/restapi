const express = require('express')

const fs = require('fs');
const { Server } = require('http');

const PORT = 3002;

const app = express()

const data = fs.readFileSync(`${__dirname}/../data/data.json`, 'utf-8')
const restaurantsData = JSON.parse(data)

app.use(express.json())
//app.use(morgan('dev'))

app.use(express.static(`${__dirname}/../public`))

app.get("/", (req, res) => {
    res.send("Hello from my first Server")
})



app.get('/api/restaurants', (req, res) => {
    res.status(200).json({
        status: "success",
        count: restaurantsData.length,
        data: restaurantsData
    })
})

app.post('/api/restaurants', (req, res) => {
    console.log(req.body)
    const newRestaurant = {id: restaurantsData.length+1, ...req.body}
    const newRestaurants = [...restaurantsData, newRestaurant]

    fs.writeFile(`${__dirname}/../data/data.json`, 'utf-8', JSON.stringify(newRestaurants), (err) => {
        if(!err){
            res.status(201).json({
                status: "Successfully added"
            })
        } else {
            res.send(500).json({
                status: "Error Occured",
                err: err.message
            })
        }

    })
})
app.get('/api/restaurants/:id', (req,res) => {
    const restaurant = restaurantsData.find(item => item.id == req.params.id)
    res.status(200).send({
        status: "Success",
        data: restaurant
    })
})

//app.router('/api/path')
//.get(() => {})
//.post(() => {})

app.use('/api/path',restaurantsRouter)

app.use((req, res, next) => {
    console.log('second middleware',req.body)
    next()
})

app.use('/api/path',restaurantsRouter)

app.use((req, res, next) => {
    console.log('second middleware',req.body)
    next()
})

app.listen(PORT, () => {
    console.log("Server started successfully")
})

