const express = require('express')
const router = express.Router()
const Review = require('../models/reviewModel')

router.get('/', async (req, res) => {
    try {
        const review = await Review.find({})
        res.status(200).json(review)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const review = await Review.findById(id)
        res.status(200).json(review)
    } catch (error) {
    res.status(500).json({message: error.message})
    }
})

router.post('/', async (req, res) => {
    try {
        const review = await Review.create(req.body)
        res.status(200).json(review)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const review = await Review.findByIdAndUpdate(id, req.body);
        if(!review){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedReview = await Review.findById(id);
        res.status(200).json(updatedReview);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;