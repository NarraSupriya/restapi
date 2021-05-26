const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'An Restaurant must have a name'],
            unique: true,
            minLength: [3, 'name must be at least 3 chars'],
            maxLength: [100, 'must be less than 100 chars']
        },
        cuisines: {
            type: String,
            required: [true, 'which kind of food is present']
        },
        timings: {
            type: Number,
            required: [true, 'time must be  there']
        },
        contact_Number: {
            type: Number,
            required: [true, 'number must be there'],
            min: [10, 'must be of 10 digits'],
            max: [12, 'not more than 12 digits'],
            default: 0
        },
        location: {
            type: String,
            required: [true, 'location must be specified']
        },
        menus: {
            type: String,
            required: [true, 'menu must be specified']
        },
        Details: {
            type: String,
            required: [true, 'cuisines must be specified']
        },
        rating: {
            type: Number,
            required: [true, 'rating must be there']
        },
        other_Info: {
            type: String,
            required: [true, 'other information can be specified'],
            enum: {
                value: ['Breakfast', 'Home Delivery', 'vegetarian'],
                message: 'must be one of these values'
            }
        }
    }
)

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;

Restaurant.create({})