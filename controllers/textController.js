const asyncHandler = require('express-async-handler')
const Text = require("../models/textModel")

// const editHomeText = asyncHandler(async(req, res) => {
//     const {text} = req.body

//     const textExists = await Text.findOne({ text })
//     console.log(textExists)

//     if(textExists) {
//         res.status(400);
//         throw new Error("Text Already Exists")
//     }

//     if(textExists) {
//         textExists.text = req.body.text || textExists.text

//         if(req.body.text) {
//             textExists.text = req.body.text
//         }
//         const editedText = await textExists.save();

//         res.status(200).json({
//             _id: editedText._id,
//             text: editedText.text
//         })
//     } else {
//         res.status(400)
//         throw new Error("No Text")
//     }
// })

const editHomeText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const editHomeText2 = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})


const editHomeText3 = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const welcomeText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const secText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const profText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})



const visitText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})


const rufusText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})


const eventText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})


const banquetText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const roomText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})


const securityText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const highText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const dedText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const highlyText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const accessText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const successText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const facText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const oneText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const twoText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const threeText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const fourText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const fiveText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})

const sixText = asyncHandler(async(req, res, next) => {

    
    const oneText = await Text.findOne()
    if(oneText) {
        oneText.text = req.body.text || oneText.text

        if(req.body.text) {
        
            oneText.text = req.body.text
        } else{
            res.status(400)
            throw new Error("error")
        }
    
    }
    let editText;
        editText =  await oneText.save()
    res.json(editText)
    

})














module.exports = {editHomeText, editHomeText2, editHomeText3, welcomeText, secText, profText, visitText, rufusText, eventText, banquetText, roomText, securityText, highText, dedText, highlyText, accessText, successText, facText, oneText, twoText, threeText, fourText, fiveText, sixText }