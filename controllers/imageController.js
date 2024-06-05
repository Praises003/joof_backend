const asyncHandler = require('express-async-handler')
const path = require('path')
const fs = require('fs')
const Image = require('../models/imageModel')
const imageDownloader = require('image-downloader');
const ImageI = require('../models/imageIModel');
const ImageII = require('../models/imageIIModel');


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

  const imageUploadCon = asyncHandler(async(req, res) => {
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

const getAllImages = asyncHandler(async(req, res) => {
    const images = await Image.findOne().sort({ '_id': -1 });
    if(images) {
        res.status(200).json(images)
    }
    else {
        res.status(400)
        throw new Error("Images cannot be found")
    }
})

// Get Multiple Images
const getMultiImage = asyncHandler(async(req, res) => {
  try {
  const images = await Image.find()
  const multipleImages = images.map(image => image.multipleImages).flat();

  if (multipleImages.length > 0) {
    res.status(200).json(multipleImages);
  } else {
    res.status(404).json({ message: 'No multiple images found' });
  } 
}  catch (error) {
  res.status(500).json({ message: 'Server error', error: error.message });
}
});


// ImageI Controller
const imageUploadI = asyncHandler(async(req, res) => {
    if (!req.file) {
      return res.status(400).send({ message: 'No file uploaded' });
    }
    const baseUrl = `${req.protocol}://${req.get('host')}`

    const uploadedFilePath = path.join('/tmp', req.file.filename);

    const fileUrl = `${baseUrl}${uploadedFilePath.replace(/\\/g, '/')}`

    let singleImage = {
        url: fileUrl,
        fileName: req.file.originalname
      }

     // Create a new image document
    const newImage = new ImageI({
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

  // ImageI multiupload
  const multiImageUploadI = asyncHandler(async(req, res) => {
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
    const newImage = new ImageI({
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

//

// Image I Get Single Image
const getImagesI = asyncHandler(async(req, res) => {
  const images = await ImageI.findOne().sort({ '_id': -1 });
  if(images) {
      res.status(200).json(images)
  }
  else {
      res.status(400)
      throw new Error("Images cannot be found")
  }
})

// Get Multi ImageI
const getMultiImageI = asyncHandler(async(req, res) => {
  try {
  const images = await ImageI.find()
  const multipleImages = images.map(image => image.multipleImages).flat();

  if (multipleImages.length > 0) {
    res.status(200).json(multipleImages);
  } else {
    res.status(404).json({ message: 'No multiple images found' });
  } 
}  catch (error) {
  res.status(500).json({ message: 'Server error', error: error.message });
}
});



  // ImageII Controller
  const imageUploadII = asyncHandler(async(req, res) => {
    if (!req.file) {
      return res.status(400).send({ message: 'No file uploaded' });
    }
    const baseUrl = `${req.protocol}://${req.get('host')}`

    let singleImage = {
        url: `${baseUrl}/${req.file.path}`,
        fileName: req.file.originalname
      }

     // Create a new image document
    const newImage = new ImageII({
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

  const getImagesII = asyncHandler(async(req, res) => {
    const images = await Image.findOne().sort({ '_id': -1 });
    if(images) {
        res.status(200).json(images)
    }
    else {
        res.status(400)
        throw new Error("Images cannot be found")
    }
})



  module.exports = {imageUpload, imageUploadCon,multiImageUpload ,uploadByLink, getAllImages, imageUploadI, imageUploadII, multiImageUploadI, getImagesI, getImagesII, getMultiImage, getMultiImageI}
