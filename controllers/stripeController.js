const asyncHandler = require('express-async-handler')
const stripe = require('stripe')(process.env.STRIPE_SEC_KEY)


const stripeCon = asyncHandler(async (req, res) => {

    const { products } = req.body
    //console.log(stripe)
    //console.log(req.body)
    if(!products) {
        res.status(400).json({ error: "Products array is empty." });
        console.log("error")
        return;
        
    }

    

    
    const lineItems = products.map((product) => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: product.name,
                //images: [],
            },
            unit_amount: Math.round(product.price * 100)
        },
        quantity: 1
    }))
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            line_items: lineItems,
            mode: 'payment',
            success_url: `https://joof.onrender.com/success`,
            cancel_url: `https://joof.onrender.com/fail`,
        });
        console.log("Stripe Session ID:", session.id);
        console.log("Line Items:", lineItems);
        console.log(session)
        res.json({id: session.id})

        //res.redirect(303, session.url);
        
    } catch (error) {
        console.error("Stripe Error:", error);
        res.status(500).json({ error: "Internal Server Error." });
    
    }
    
     //res.redirect(303, session.url);
    //console.log(session)
    //res.json({id: session.id})
  })

  module.exports = {stripeCon}