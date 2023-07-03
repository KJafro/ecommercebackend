const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema (
    {
        name: {
            type: String,
            required: true,
        },
        itemName: {
            type: String,
            required: true,
        },
        itemId: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        rating: {
            type: String,
            required: true,
        },
        review: {
            type: String,
            required: true,
        },
        reviewDesc: {
            type: String,
            required: true,
        },
        likes: {
            type: Number,
        },
        likesName: {
            type: String,
        },
    },
    {
        timestamps: true
    }
)

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review