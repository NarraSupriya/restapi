const express = require('express')

const fs = require('fs');
const { Server } = require('http');

const app = express()

app.get("/",(req, res) => {
    res.send("Hello from my first Server")
})

const actors = fs.readFile(`${__dirname}/../data/data.json`,'utf-8', (err, data) => {
    console.log(typeof data)
    const jsonData = JSON.parse(data)

    let id=0;
    const newData = jsonData.map(item => {
        id++;
        return({id: id, ...item})
    })
    fs.writeFile(`${__dirname}/../data/data.json`,JSON.stringify(newData), (err) => {
        console.log(err,"done")
    })
})
//console.log(__dirname)