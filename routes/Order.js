const express = require('express')
const router = express.Router()
const Order = require('../models/orderModel')

router.get('/', async (req, res) => {
    try {
        const order = await Order.find({})
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const order = await Order.findById(id)
        res.status(200).json(order)
    } catch (error) {
    res.status(500).json({message: error.message})
    }
})

router.post('/', async (req, res) => {
    try {
        const order = await Order.create(req.body)
        res.status(200).json(order)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

module.exports = router;