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


module.exports = {editHomeText, editHomeText2, editHomeText3}