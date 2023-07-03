const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const User = require('./models/userModel')
const cors = require("cors");
app.use(cors());
app.options("*", cors());
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

const userRoute = require('./routes/User')
const itemRoute = require('./routes/Item')
const authRoute = require('./routes/auth')
const orderRoute = require('./routes/Order')
const reviewRoute = require('./routes/Review')
app.use('/user', userRoute)
app.use('/item', itemRoute)
app.use('/auth', authRoute)
app.use('/order', orderRoute)
app.use('/review', reviewRoute)

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(3000, () => {
        console.log('RUNNING ON 3000')
    })
    console.log('CONNECTED TO DB')
}).catch((error) => {
    console.log(error)
})