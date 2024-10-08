const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const path = require("path")
const http = require("http")
const fs = require('fs')
const cors = require("cors")
const cookieParser = require('cookie-parser')
const stripe = require('stripe')(process.env.STRIPE_SEC_KEY)
const connectDb = require("./config/db")
const {notFound, errorHandler} = require('./middleware/error')
const fileUpload = require("express-fileupload")
const userRoute = require("./routes/userRoute")
const eventRoute = require("./routes/eventRoute")
const guestRoute = require("./routes/guestRoute")
const stripeRoute = require("./routes/stripeRoute")
const textRoute = require("./routes/textRoute")
const textsRoute = require("./routes/textsRoutes")
const imageRoute = require("./routes/imageRoute")
const packageRoute = require("./routes/packageRoute")
const videoRoute = require("./routes/videoRoute")
const tranRoute = require("./routes/tranRoute")
const uploadRoute = require("./routes/uploadRoute")
const deleteUploadRoute = require("./routes/deleteUploadRoute")
const tableRoute = require("./routes/tableRoute")
const memberRoute = require("./routes/memberRoute")
const managementRoute = require("./routes/managementRoute")
const contactTextRoute = require("./routes/contactTextRoute")
const reviewRoute = require("./routes/reviewRoute")
const corporateRoute = require("./routes/corporateRoute")
const founderRoute = require("./routes/founderRoute")

const pdfRoute = require("./routes/pdfRoute")

const contactRoute = require("./routes/contactRoute")


connectDb()
const corsOptions = {
   origin: ['http://localhost:3000',"https://joof.onrender.com",  'https://rufuselemoeventcentre.com', 'http://rufuselemoeventcentre.com', "rufuselemoeventcentre.com"],
   credentials: true,
   exposedheaders: ["set-cookie"]
 };

 

// const corsOptions = {
//   origin: function(origin, callback) {
//       if (allowedOrigins.indexOf(origin) !== -1) {
//           callback(null, true);
//       } else {
//           callback(new Error('Not allowed by CORS'));
//       }
//   },
//   credentials: true // Allow cookies and authorization headers
// };
const app = express()
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/tmp', express.static(path.join(process.cwd(), 'tmp')));
app.use(fileUpload({
  useTempFiles: true,
  

}))



// }))
app.use(cookieParser())
app.use('/api/user', userRoute)
app.use('/api/event', eventRoute)
app.use('/api/guest', guestRoute)
app.use('/api/text', textRoute)
app.use('/api/texts', textsRoute)
app.use('/create-checkout-session', stripeRoute)
app.use('/transaction', tranRoute)
app.use('/api/upload', imageRoute)
app.use('/api/table', tableRoute)
app.use('/api/package', packageRoute)
app.use('/api/video', videoRoute)
app.use('/api/image', uploadRoute)
app.use('/api/destroy', deleteUploadRoute)
app.use('/api/member', memberRoute)
app.use('/api/management', managementRoute)
app.use('/api/contactText', contactTextRoute)
app.use('/api/reviews', reviewRoute)
app.use('/api/corporate', corporateRoute)
app.use('/api/founder', founderRoute)
app.use('/api/pdf', pdfRoute)
app.use('/api/contact', contactRoute)

// Middleware to correct the protocol if it's forwarded from a proxy
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    req.protocol = 'https';
  }
  next();
});


const PORT = process.env.PORT || 8000
const server = http.createServer(app)
app.use(notFound)
app.use(errorHandler)
server.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
     
  })
