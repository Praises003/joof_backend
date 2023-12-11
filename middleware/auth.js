const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../models/usersModel")

let token;
let authUser
const protect = asyncHandler(async(req, res, next) => {
    

    token = req.cookies.auth

    if(token) {
        try {

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select("-password")
            authUser = await User.findById(decoded.userId).select("-password")
            next()
        } catch (err) {
            res.status(401)
            throw new Error('Invalid token')
        }
    } else {
        res.status(401)
        throw new Error("Not Authorized")
    }
})

const admin = (req, res, next) => {

    try {

        authUser = req.user.isAdmin
        if(authUser === false) {
            res.status(401)
            throw new Error("Access Denied")
        }

    } catch(err) {
       console.log(err)

    }
    
    next()
    // authUser = req.user.isAdmin
    // if(authUser === false) {
    //     return  new Error("Access Denied")
    // } else{
    //     console.log(authUser.isAdmin)
    //     next()
    // }
   
   
}

module.exports = {protect, admin}