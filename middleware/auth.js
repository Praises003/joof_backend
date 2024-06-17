const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../models/usersModel")

let token;
let authUser
const protect = asyncHandler(async(req, res, next) => {

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1]

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from the token

            req.user = await User.findById(decoded.userId).select('-password')

            console.log(req.user)

            next()

        } catch(err) {
            console.log(err)
            res.status(401)
            throw new Error('Not authorized')

        }
    }

    if(!token) {
        res.status(401)
        throw new Error ('Not authorized, no token')
    }
    


   
    // //console.log(process.env.JWT_SECRET)
    // if(token) {
    //     try {

    //         const decoded = jwt.verify(token, process.env.JWT_SECRET)
    //                     //console.log(await User.findById('658176fc281b867192482885'))
    //         req.user = await User.findById(decoded.userId).select("-password")
    //         authUser = await User.findById(decoded.userId).select("-password")
    //         next()
    //     } catch (err) {
    //         res.status(401)
    //         throw new Error('Invalid token')
    //     }
    // } else {
    //     res.status(401)
    //     throw new Error("Not Authorized")
    // }

    // console.log(token)
})

// const admin = (req, res, next) => {

//     try {

//         authUser = req.user.isAdmin
//         if(authUser === false) {
//             res.status(401)
//             throw new Error("Access Denied")
//         }

//     } catch(err) {
//        console.log(err)

//     }
    
//     next()
//     // authUser = req.user.isAdmin
//     // if(authUser === false) {
//     //     return  new Error("Access Denied")
//     // } else{
//     //     console.log(authUser.isAdmin)
//     //     next()
//     // }
   
   
// }


const admin = (req, res, next) => {
    try {
        if (!req.user || !req.user.isAdmin) {
            res.status(401);
            throw new Error('Access Denied');
        }

        next();
    } catch (err) {
        console.error(err);
        res.status(401);
        throw new Error('Access Denied');
    }
};
module.exports = {protect, admin}