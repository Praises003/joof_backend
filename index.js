const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const http = require("http")
const cors = require("cors")
const cookieParser = require('cookie-parser')
const connectDb = require("./config/db")
const {notFound, errorHandler} = require('./middleware/error')
const userRoute = require("./routes/userRoute")
const eventRoute = require("./routes/eventRoute")


connectDb()
const corsOptions = {
  origin: ['http://localhost:3000', 'https://joof.onrender.com'],
  credentials: true,
};
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// }))
app.use(cookieParser(corsOptions))
app.use('/api/user', userRoute)
app.use('/api/event', eventRoute)

const PORT = process.env.PORT || 8000
const server = http.createServer(app)

server.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
     
  })
