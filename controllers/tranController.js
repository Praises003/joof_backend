const asyncHandler = require('express-async-handler')
const stripe = require('stripe')(process.env.STRIPE_SEC_KEY)


const tranCon = asyncHandler(async(req, res) => {
    try {
        const transactions = await stripe.charges.list()
        res.json(transactions.data)
    } catch (err) {
        console.error(err)
        res.status(500).json({err: "Failed"})

    }
})

module.exports = {tranCon}