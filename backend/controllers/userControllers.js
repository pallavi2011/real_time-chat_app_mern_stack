const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const createJwtToken = require('../config/jwtToken');

const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password, photo} = req.body;

    if(!name || !email || !password ){
        res.status(400);
        throw new Error("Please enter all required fields");
    }

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }

    const user = await User.create({
        name, email, password, photo
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            photo: user.photo,
            token: createJwtToken(user._id)
        })
    }else
    {
        res.status(400)
        throw new Error('User not created')
    }
})

module.exports = {
    registerUser
}