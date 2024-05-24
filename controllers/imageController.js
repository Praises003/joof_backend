const asyncHandler = require('express-async-handler')
const path = require('path')
const fs = require('fs')
const Image = require('../models/imageModel')
const imageDownloader = require('image-downloader');


const PORT = process.env.PORT || 8000
const imageUpload = asyncHandler(async(req, res) => {
    if (!req.file) {
      return res.status(400).send({ message: 'No file uploaded' });
    }
    const baseUrl = `${req.protocol}://${req.get('host')}`

    let singleImage = {
        url: `${baseUrl}/${req.file.path}`,
        fileName: req.file.originalname
      }

     // Create a new image document
    const newImage = new Image({
        singleImage: singleImage,
        //multipleImages: multipleImageUrls,
        // Other model properties (if any)
      });
  
      // Save the image document
       const savedImage = await newImage.save();
    //   console.log(savedImage.singleImage)
    
    //const url = `http://localhost:${PORT}/${req.file.path}`
    res.status(200).send({ message: 'File uploaded successfully',  savedImage });
  })

 

  
    
  

 // Construct the file URL
//  const filePath = path.join('uploads', req.file.filename);
//  const fileUrl = `${req.protocol}://${req.get('host')}/${filePath.replace(/\\/g, '/')}`;

//  res.json({ fileUrl });
// });

const multiImageUpload = asyncHandler(async(req, res) => {
    //console.log(req.files)
    if(!req.files  || req.files.length === 0) {
        //console.log(req.files)
        return res.status(400).send({ message: 'No file uploaded' }); 
    }

    const baseUrl = `${req.protocol}://${req.get('host')}`


    // Map through the files to extract their paths
    let multipleImg;
    const images = req.files.map(file => (
        multipleImg = {
            url: `${baseUrl}/${file.path}`,
            fieldName: file.originalname
        }
    ));

    

    

    // Create a new image document
    const newImage = new Image({
        multipleImages: images,
      });
  
      // Save the image document
      const savedImage = await newImage.save();
    
    // Send a single response with all file paths
    res.status(200).send({ message: 'Files uploaded successfully', filePaths: savedImage});

    // const images = req.files.map(file =>{ (console.log(file))
    // return res.send([file.path])
    // res.status(200).send({ message: 'File uploaded successfully', filePath: [file]});
//})
    //res.send(images)

    // for (let i = 0; i < req.files.length; i++) {
    //     if(req.files[i].mimetype !== "image/jpeg") {

    //     }
    // }
    
})

const uploadByLink = async(req, res) => {
    const {link} = req.body;
    const newName = Date.now() + '.jpg';
    const uploadDir = path.join(__dirname, 'uploads'); // Path to uploads directory

    // Create the uploads directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }

    try {
        // Download the image and save it to the uploads directory
        await imageDownloader.image({
            url: link,
            dest: path.join(uploadDir, newName)
        });
        res.json({ filePath: path.join(uploadDir, newName) });
    } catch (error) {
        console.error('Error downloading image:', error);
        res.status(500).json({ error: 'Failed to download and save the image' });
    }

    // await imageDownloader.image({
    //     url: link,
    //     dest: __dirname + '/uploads/' +newName
    // })
    // res.json(__dirname + '/uploads/' +newName)

}



  module.exports = {imageUpload,multiImageUpload ,uploadByLink}
