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
const guestRoute = require("./routes/guestRoute")


connectDb()
const corsOptions = {
   origin: ['http://localhost:3000', 'https://joof.onrender.com/'],
   credentials: true,
 };
const app = express()
if(process.env.NODE_ENV !== "development") {
  app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
  }))
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// }))
app.use(cookieParser())
app.use('/api/user', userRoute)
app.use('/api/event', eventRoute)
app.use('/api/guest', guestRoute)

const PORT = process.env.PORT || 8000
const server = http.createServer(app)
app.use(notFound)
app.use(errorHandler)
server.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
     
  })
