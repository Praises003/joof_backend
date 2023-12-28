const jwt = require("jsonwebtoken")


const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })

    


    res.cookie('auth', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development', 
        sameSite: process.env.NODE_ENV !== "development" ? "none": 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000,
        path: "/", 
        domain: process.env.NODE_ENV !== "development" ? "https://joof-backend.vercel.app/api/user" : ""
        //domain: 'http://localhost'
        //domain: 'https://joof-backend.onrender.com'
    })

    //console.log(process.env.NODE_ENV)
}

module.exports = generateToken