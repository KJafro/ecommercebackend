const mongoose = require('mongoose')

const itemSchema = mongoose.Schema (
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        rating: {
            type: Array
        },
        reviews: {
            type: Array,
        },
        reviewDesc: {
            type: Array,
        },
        stock: {
            type: Number,
        }
    },
    {
        timestamps: true
    }
)

const Item = mongoose.model('Item', itemSchema)

module.exports = Item