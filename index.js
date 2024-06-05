const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const path = require("path")
const http = require("http")
const cors = require("cors")
const cookieParser = require('cookie-parser')
const stripe = require('stripe')(process.env.STRIPE_SEC_KEY)
const connectDb = require("./config/db")
const {notFound, errorHandler} = require('./middleware/error')
const userRoute = require("./routes/userRoute")
const eventRoute = require("./routes/eventRoute")
const guestRoute = require("./routes/guestRoute")
const stripeRoute = require("./routes/stripeRoute")
const textRoute = require("./routes/textRoute")
const imageRoute = require("./routes/imageRoute")

const tranRoute = require("./routes/tranRoute")


connectDb()
const corsOptions = {
   origin: ['http://localhost:3000', 'https://joof.onrender.com'],
   credentials: true,
   exposedheaders: ["set-cookie"]
 };
const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/tmp', express.static(path.join(process.cwd(), 'tmp')));


// }))
app.use(cookieParser())
app.use('/api/user', userRoute)
app.use('/api/event', eventRoute)
app.use('/api/guest', guestRoute)
app.use('/api/text', textRoute)
app.use('/create-checkout-session', stripeRoute)
app.use('/transaction', tranRoute)
app.use('/api/upload', imageRoute)

const PORT = process.env.PORT || 8000
const server = http.createServer(app)
app.use(notFound)
app.use(errorHandler)
server.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
     
  })
