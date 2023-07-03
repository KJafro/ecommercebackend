const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser')
const jwt = require ('jsonwebtoken')
const {createTokens, validateToken} = require('../jwt')
const jwtSec = 'looooool'


//REGISTER
router.post("/register", async(req, res) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
            reviewsNum: req.body.reviewsNum
        })

        const user = await newUser.save();
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN

router.post("/login", async (req, res) => {
    const { name, password } = req.body;
    const user = await User.findOne({ name: name });
    if (!user) return res.status(400).json({ msg: "User does not exist! " });

    const dbPassword = user.password
    bcrypt.compare(password, dbPassword).then((match) => {
        if (!match) {
            res.status(400).json({error: 'Wrong user/password!'})
        } else {
            const accessToken = createTokens(user)

            res.cookie("access-token", accessToken, {
                maxAge: 60*60*24*30*1000
            })
            res.json({accessToken: accessToken})
        }
    })
})


router.get("/profile", validateToken, (req, res) => {
    res.json("profile")
});

module.exports = router