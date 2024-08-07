const jwt = require("jsonwebtoken")


const generateToken = ( userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })

    


    res.cookie('auth', token, {
        httpOnly: true,
        secure: true, 
        sameSite: strict,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        path: "/", 
        //domain: process.env.NODE_ENV !== "development" ? "joof-backend.vercel.app" : ".localhost"
        //domain: 'localhost'
        //domain: 'https://joof-backend.onrender.com'
    })

    //console.log(process.env.NODE_ENV)
}

module.exports = generateToken