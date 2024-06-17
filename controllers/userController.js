const asyncHandler = require('express-async-handler')
const jwt = require("jsonwebtoken")



const User = require("../models/usersModel")



// @desc Register New Users
// route POST
//@access PUBLIC

const registerUser = asyncHandler(async(req, res) => {
    
    const {name, email, password, isAdmin} = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error("Please Fill Up all the Fields")
    }

    const userExist =  await User.findOne({ email })

    if(userExist) {
        res.status(400);
        throw new Error("User already exists")
    }

    const user = await User.create({
        name, email, password, isAdmin
    })

    if (user) {
        //console.log(user)
        

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
            
           
        })
        
    } else {
        res.status(400)
        throw new Error("Invalid Registration Details")
    }

})

// @desc Login User
//@route POST /api/user/login
//@access PUBLIC

const login = asyncHandler(async(req,res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    

    if (user && (await user.validatePassword(password))) {
        
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid Login Details")
    }
})


// @desc Logout User
//@route POST /api/user/logout
//@access PUBLIC

const logout = asyncHandler(async(req, res) => {
    res.cookie('auth', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({message: 'You have logged out'})
})

// /api/user?search=praise
const getAllUsers = asyncHandler(async(req, res) => {
    const keyword = req.query.search ? {
        $or: [
            {name:{$regex: req.query.search, $options: "i"}}, 
            {email:{ $regex: req.query.search, $options: "i"}}
        ]
    } : {}

    const users = await User.find(keyword).find({_id: { $ne: req.user._id}}).select("-password")

    res.status(200).json({
        users
    })

})

const allUsers =asyncHandler(async(req, res) => {
    const user = await User.find()
    //console.log(req.user)


    res.send(user)
})

const generateToken = ( userId) => {
   return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}
module.exports = {registerUser, login, logout, getAllUsers, allUsers}