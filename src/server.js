const app = require('./app')
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config({ path: `${__dirname}/config.env`})

const DBURL = process.env.DB_URL.replace('<password>',process.env.PASSWORD);

mongoose.connect(DBURL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected Successfully')
}).catch((err) => {
    console.log(err.message)
})

const restaurantSchema = new mongoose.Schema({
    name: String,
    rate: Number,
    city: String
})

const Restaurant = mongoose.model('Actor', restaurantSchema);
const supriya = new Restaurant({
    name: "Supriya Narra",
    rate: 4.4,
    city: "Guntur"
})
supriya.save()

Restaurant.create({
    name: "Sree Latha Narra",
    rate: 4.4,
    city: "Guntur"
}).then((doc) => {
    console.log('created',doc)
}).catch(err => {
    console.log(err.message)
})


console.log(process.env)
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("server is running on ", "http://localhost:"+PORT)
})