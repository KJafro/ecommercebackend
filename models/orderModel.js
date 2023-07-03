const mongoose = require('mongoose')

const orderSchema = mongoose.Schema (
    {
        fullName: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        address1: {
            type: String,
            required: true,
        },
        address2: {
            type: String,
            required: true,
        },
        postcode: {
            type: String,
            required: true,
        },
        cardNumber: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },
        discount: {
            type: Boolean
        }
    },
    {
        timestamps: true
    }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order