const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.ObjectId,
        ref: 'user',
        require: [true, 'Restaurant must be food']
    },
    restaurant: {
        type:mongoose.Schema.ObjectId,
        ref: 'Restaurant',
        require: [true, 'Restaurant must be for food']

    }
})