const express = require('express')
const router = express.Router()
const Item = require('../models/itemModel')

router.get('/', async (req, res) => {
    try {
        const item = await Item.find({})
        res.status(200).json(item)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const use = await Item.findById(id)
        res.status(200).json(use)
    } catch (error) {
    res.status(500).json({message: error.message})
    }
})

router.post('/', async (req, res) => {
    try {
        const item = await Item.create(req.body)
        res.status(200).json(item)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const item = await Item.findByIdAndUpdate(id, req.body);
        if(!item){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedItem = await Item.findById(id);
        res.status(200).json(updatedItem);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const item = await Item.findByIdAndDelete(id)
        if(!item) {
            return res.status(404).json({message: 'No such ID'})
        }
        res.status(200).json(item)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;