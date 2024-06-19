const asyncHandler = require('express-async-handler')
const path = require('path')
const { URL } = require('url');
const fs = require('fs')
const { uploadImageToCloudinary } = require(".././utils/cloudinaryUtils")
const Image = require('../models/imageModel')
const imageDownloader = require('image-downloader');
const ImageI = require('../models/imageIModel');
const ImageII = require('../models/imageIIModel');
const ImageIII = require('../models/imageIIIModel');
const ImageIV = require('../models/imageIVModel');
const ImageV = require('../models/imageVModel');


const PORT = process.env.PORT || 8000
// const imageUpload = asyncHandler(async(req, res) => {
//     if (!req.file) {
//       return res.status(400).send({ message: 'No file uploaded' });
//     }
//     const baseUrl = `${req.protocol}://${req.get('host')}`

//     let singleImage = {
//         url: `${baseUrl}/${req.file.path}`,
//         fileName: req.file.originalname
//       }

//      // Create a new image document
//     const newImage = new Image({
//         singleImage: singleImage,
//         //multipleImages: multipleImageUrls,
//         // Other model properties (if any)
//       });
  
//       // Save the image document
//        const savedImage = await newImage.save();
//     //   console.log(savedImage.singleImage)
    
//     //const url = `http://localhost:${PORT}/${req.file.path}`
//     res.status(200).send({ message: 'File uploaded successfully',  savedImage });
//   })

const imageUpload = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ msg: "No files were uploaded" });
    }

    const file = req.files.file;
    console.log(file)

    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Size too large" });
    }

    if (
      file.mimetype !== "image/jpeg" &&
      file.mimetype !== "image/png"
    ) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "File format is not supported" });
    }

    // Upload image to Cloudinary using utility function
    const cloudinaryResult = await uploadImageToCloudinary(file);

    

    let singleImage = {
      url: cloudinaryResult.url,
      fileName: file.name
    }

    
    // Create a new image document with Cloudinary URL
    const newImage = new Image({
      singleImage: singleImage
      // Other model properties as needed
    });

    // Save the image document to your database
    const savedImage = await newImage.save();

    // Respond with success message and saved image data
    res.status(200).json(savedImage);
  } catch (error) {
    console.error("Error in imageUploadI controller:", error);
    res.status(500).json({ error: "Failed to upload the file" });
  }
};

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

// const multiImageUpload = asyncHandler(async(req, res) => {
//     //console.log(req.files)
//     if(!req.files  || req.files.length === 0) {
//         //console.log(req.files)
//         return res.status(400).send({ message: 'No file uploaded' }); 
//     }

//     const baseUrl = `${req.protocol}://${req.get('host')}`


//     // Map through the files to extract their paths
//     let multipleImg;
//     const images = req.files.map(file => (
//         multipleImg = {
//             url: `${baseUrl}/${file.path}`,
//             fieldName: file.originalname
//         }
//     ));

    

    

//     // Create a new image document
//     const newImage = new Image({
//         multipleImages: images,
//       });
  
//       // Save the image document
//       const savedImage = await newImage.save();
    
//     // Send a single response with all file paths
//     res.status(200).send({ message: 'Files uploaded successfully', filePaths: savedImage});

//     // const images = req.files.map(file =>{ (console.log(file))
//     // return res.send([file.path])
//     // res.status(200).send({ message: 'File uploaded successfully', filePath: [file]});
// //})
//     //res.send(images)

//     // for (let i = 0; i < req.files.length; i++) {
//     //     if(req.files[i].mimetype !== "image/jpeg") {

//     //     }
//     // }
    
// })

//multipleImages: uploadResults.map(result => ({
    //     url: result.secure_url,
    //     fileName: result.original_filename
    //   })

    const multiImageUpload = async (req, res) => {
      try {
        if (!req.files || Object.keys(req.files).length === 0) {
          return res.status(400).json({ msg: "No files were uploaded" });
        }
    
        const files = req.files.file; // Assuming files is the array of files
        
        // Array to store Cloudinary upload results
        const uploadResults = [];
    
        // Iterate through each file and upload to Cloudinary
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
    
          if (file.size > 1024 * 1024) {
            // Optionally handle file size validation
            removeTmp(file.tempFilePath);
            return res.status(400).json({ msg: `File ${file.name} size too large` });
          }
    
          if (
            file.mimetype !== "image/jpeg" &&
            file.mimetype !== "image/png"
          ) {
            // Optionally handle file type validation
            removeTmp(file.tempFilePath);
            return res.status(400).json({ msg: `File ${file.name} format is not supported` });
          }
    
          // Upload file to Cloudinary
          const cloudinaryResult = await uploadImageToCloudinary(file);
          //console.log(cloudinaryResult)
          uploadResults.push(cloudinaryResult);
    
          // Remove temporary file
          removeTmp(file.tempFilePath);
        }
    
        // Map uploadResults to match your Mongoose schema
        const images = uploadResults.map(result => ({
          url: result.url,
          fileName: result.public_id
        }));
    
        // Example: Saving to database using Mongoose
        const newImage = new Image({
          multipleImages: images,
        });
    
        // Save the image document
         const savedImage = await newImage.save();
        console.log(uploadResults)
    
        res.status(200).json({ message: 'Files uploaded successfully', savedImage });
      } catch (error) {
        console.error("Error in imageUploadI controller:", error);
        res.status(500).json({ error: "Failed to upload the files" });
      }
    };
    

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




const imageUploadI = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ msg: "No files were uploaded" });
    }

    const file = req.files.file;
    console.log(file)

    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Size too large" });
    }

    if (
      file.mimetype !== "image/jpeg" &&
      file.mimetype !== "image/png"
    ) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "File format is not supported" });
    }

    // Upload image to Cloudinary using utility function
    const cloudinaryResult = await uploadImageToCloudinary(file);

    console.log(cloudinaryResult)

    let singleImage = {
      url: cloudinaryResult.url,
      fileName: file.name
    }

    
    // Create a new image document with Cloudinary URL
    const newImage = new ImageI({
      singleImage: singleImage
      // Other model properties as needed
    });

    // Save the image document to your database
    const savedImage = await newImage.save();

    // Respond with success message and saved image data
    res.status(200).json(savedImage);
  } catch (error) {
    console.error("Error in imageUploadI controller:", error);
    res.status(500).json({ error: "Failed to upload the file" });
  }
};

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
  // const imageUploadII = asyncHandler(async(req, res) => {
  //   if (!req.file) {
  //     return res.status(400).send({ message: 'No file uploaded' });
  //   }
  //   const baseUrl = `${req.protocol}://${req.get('host')}`

  //   let singleImage = {
  //       url: `${baseUrl}/${req.file.path}`,
  //       fileName: req.file.originalname
  //     }

  //    // Create a new image document
  //   const newImage = new ImageII({
  //       singleImage: singleImage,
  //       //multipleImages: multipleImageUrls,
  //       // Other model properties (if any)
  //     });
  
  //     // Save the image document
  //      const savedImage = await newImage.save();
  //   //   console.log(savedImage.singleImage)
    
  //   //const url = `http://localhost:${PORT}/${req.file.path}`
  //   res.status(200).send({ message: 'File uploaded successfully',  savedImage });
  // })

  const imageUploadII = async (req, res) => {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ msg: "No files were uploaded" });
      }
  
      const file = req.files.file;
      console.log(file)
  
      if (file.size > 1024 * 1024) {
        removeTmp(file.tempFilePath);
        return res.status(400).json({ msg: "Size too large" });
      }
  
      if (
        file.mimetype !== "image/jpeg" &&
        file.mimetype !== "image/png"
      ) {
        removeTmp(file.tempFilePath);
        return res.status(400).json({ msg: "File format is not supported" });
      }
  
      // Upload image to Cloudinary using utility function
      const cloudinaryResult = await uploadImageToCloudinary(file);
  
      console.log(cloudinaryResult)
  
      let singleImage = {
        url: cloudinaryResult.url,
        fileName: file.name
      }
  
      
      // Create a new image document with Cloudinary URL
      const newImage = new ImageII({
        singleImage: singleImage
        // Other model properties as needed
      });
  
      // Save the image document to your database
      const savedImage = await newImage.save();
  
      // Respond with success message and saved image data
      res.status(200).json(savedImage);
    } catch (error) {
      console.error("Error in imageUploadI controller:", error);
      res.status(500).json({ error: "Failed to upload the file" });
    }
  };

  const getImagesII = asyncHandler(async(req, res) => {
    const images = await ImageII.findOne().sort({ '_id': -1 });
    if(images) {
        res.status(200).json(images)
    }
    else {
        res.status(400)
        throw new Error("Images cannot be found")
    }
})

// Delete Image Handler
// const deleteImage = asyncHandler(async (req, res) => {
//   const { url } = req.body;

//   // Find the image in the database
//   const image = await Image.findOne({ 'singleImage.url': url });
//   if (!image) {
//     return res.status(404).json({ message: 'Image not found' });
//   }

//   // Remove the image document
//   await Image.deleteOne({ _id: image._id });

//   // Remove the image file
//   const filePath = path.join(__dirname, '..', url.split(req.get('host'))[1]);
//   fs.unlink(filePath, (err) => {
//     if (err) {
//       console.error('Error deleting image file:', err);
//       return res.status(500).json({ message: 'Error deleting image file' });
//     }

//     res.status(200).json({ message: 'Image deleted successfully' });
//   });
// });

const deleteMultiImage = asyncHandler(async (req, res) => {
  const { url } = req.body;

  console.log('URL received:', url); // Debug log

  // Verify URL is valid
  if (!url) {
    return res.status(400).json({ message: 'Invalid URL' });
  }

  // Find the image document that contains the URL in its multipleImages array
  const image = await Image.findOne({ 'multipleImages.url': url });
  if (!image) {
    return res.status(404).json({ message: 'Image not found' });
  }

  // Remove the image URL from the multipleImages array
  image.multipleImages = image.multipleImages.filter(img => img.url !== url);

  // If no images are left, delete the document entirely, otherwise save the updated document
  if (image.multipleImages.length === 0) {
    await Image.deleteOne({ _id: image._id });
  } else {
    await image.save();
  }

  // Send success response
    res.status(200).json({ message: 'Image URL deleted successfully' });

  // Parse the URL to extract the relative file path
  // const parsedUrl = new URL(url);
  // const relativeFilePath = parsedUrl.pathname; // Extract pathname

  // console.log('Relative file path:', relativeFilePath); // Debug log

  // if (!relativeFilePath) {
  //   return res.status(400).json({ message: 'Could not extract file path from URL' });
  // }

  // const filePath = path.join(__dirname, '..', relativeFilePath);
  // console.log('Full file path:', filePath); // Debug log

  //  // Log the constructed file path
  //  console.log(`Constructed file path: ${filePath}`);

   // Check if the file exists
  //  if (!fs.existsSync(filePath)) {
  //    console.error(`File does not exist: ${filePath}`);
  //    return res.status(404).json({ message: 'File not found' });
  //  }

  // fs.unlink(filePath, (err) => {
  //   if (err) {
  //     console.error('Error deleting image file:', err);
  //     return res.status(500).json({ message: 'Error deleting image file' });
  //   }

  //   res.status(200).json({ message: 'Image deleted successfully' });
  // });
});

// ImageIII Controller
// const imageUploadIII = asyncHandler(async(req, res) => {
//   if (!req.file) {
//     return res.status(400).send({ message: 'No file uploaded' });
//   }
//   const baseUrl = `${req.protocol}://${req.get('host')}`

//   let singleImage = {
//       url: `${baseUrl}/${req.file.path}`,
//       fileName: req.file.originalname
//     }

//    // Create a new image document
//   const newImage = new ImageIII ({
//       singleImage: singleImage,
//       //multipleImages: multipleImageUrls,
//       // Other model properties (if any)
//     });

//     // Save the image document
//      const savedImage = await newImage.save();
//   //   console.log(savedImage.singleImage)
  
//   //const url = `http://localhost:${PORT}/${req.file.path}`
//   res.status(200).send({ message: 'File uploaded successfully',  savedImage });
// })

const imageUploadIII = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ msg: "No files were uploaded" });
    }

    const file = req.files.file;
    console.log(file)

    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Size too large" });
    }

    if (
      file.mimetype !== "image/jpeg" &&
      file.mimetype !== "image/png"
    ) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "File format is not supported" });
    }

    // Upload image to Cloudinary using utility function
    const cloudinaryResult = await uploadImageToCloudinary(file);

    console.log(cloudinaryResult)

    let singleImage = {
      url: cloudinaryResult.url,
      fileName: file.name
    }

    
    // Create a new image document with Cloudinary URL
    const newImage = new ImageIII({
      singleImage: singleImage
      // Other model properties as needed
    });

    // Save the image document to your database
    const savedImage = await newImage.save();

    // Respond with success message and saved image data
    res.status(200).json(savedImage);
  } catch (error) {
    console.error("Error in imageUploadI controller:", error);
    res.status(500).json({ error: "Failed to upload the file" });
  }
};
//Get Image III
const getImagesIII = asyncHandler(async(req, res) => {
  const images = await ImageIII.findOne().sort({ '_id': -1 });
  if(images) {
      res.status(200).json(images)
  }
  else {
      res.status(400)
      throw new Error("Images cannot be found")
  }
})

// ImageIVController
// const imageUploadIV = asyncHandler(async(req, res) => {
//   if (!req.file) {
//     return res.status(400).send({ message: 'No file uploaded' });
//   }
//   const baseUrl = `${req.protocol}://${req.get('host')}`

//   let singleImage = {
//       url: `${baseUrl}/${req.file.path}`,
//       fileName: req.file.originalname
//     }

//    // Create a new image document
//   const newImage = new ImageIV ({
//       singleImage: singleImage,
//       //multipleImages: multipleImageUrls,
//       // Other model properties (if any)
//     });

//     // Save the image document
//      const savedImage = await newImage.save();
//   //   console.log(savedImage.singleImage)
  
//   //const url = `http://localhost:${PORT}/${req.file.path}`
//   res.status(200).send({ message: 'File uploaded successfully',  savedImage });
// })

const imageUploadIV = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ msg: "No files were uploaded" });
    }

    const file = req.files.file;
    console.log(file)

    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Size too large" });
    }

    if (
      file.mimetype !== "image/jpeg" &&
      file.mimetype !== "image/png"
    ) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "File format is not supported" });
    }

    // Upload image to Cloudinary using utility function
    const cloudinaryResult = await uploadImageToCloudinary(file);

    console.log(cloudinaryResult)

    let singleImage = {
      url: cloudinaryResult.url,
      fileName: file.name
    }

    
    // Create a new image document with Cloudinary URL
    const newImage = new ImageIV({
      singleImage: singleImage
      // Other model properties as needed
    });

    // Save the image document to your database
    const savedImage = await newImage.save();

    // Respond with success message and saved image data
    res.status(200).json(savedImage);
  } catch (error) {
    console.error("Error in imageUploadI controller:", error);
    res.status(500).json({ error: "Failed to upload the file" });
  }
};

//Get Image III
const getImagesIV = asyncHandler(async(req, res) => {
  const images = await ImageIV.findOne().sort({ '_id': -1 });
  if(images) {
      res.status(200).json(images)
  }
  else {
      res.status(400)
      throw new Error("Images cannot be found")
  }
})


// ImageV Controller
// const imageUploadV = asyncHandler(async(req, res) => {
//   if (!req.file) {
//     return res.status(400).send({ message: 'No file uploaded' });
//   }
//   const baseUrl = `${req.protocol}://${req.get('host')}`

//   let singleImage = {
//       url: `${baseUrl}/${req.file.path}`,
//       fileName: req.file.originalname
//     }

//    // Create a new image document
//   const newImage = new ImageV ({
//       singleImage: singleImage,
//       //multipleImages: multipleImageUrls,
//       // Other model properties (if any)
//     });

//     // Save the image document
//      const savedImage = await newImage.save();
//   //   console.log(savedImage.singleImage)
  
//   //const url = `http://localhost:${PORT}/${req.file.path}`
//   res.status(200).send({ message: 'File uploaded successfully',  savedImage });
// })

const imageUploadV = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ msg: "No files were uploaded" });
    }

    const file = req.files.file;
    console.log(file)

    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Size too large" });
    }

    if (
      file.mimetype !== "image/jpeg" &&
      file.mimetype !== "image/png"
    ) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "File format is not supported" });
    }

    // Upload image to Cloudinary using utility function
    const cloudinaryResult = await uploadImageToCloudinary(file);

    console.log(cloudinaryResult)

    let singleImage = {
      url: cloudinaryResult.url,
      fileName: file.name
    }

    
    // Create a new image document with Cloudinary URL
    const newImage = new ImageV({
      singleImage: singleImage
      // Other model properties as needed
    });

    // Save the image document to your database
    const savedImage = await newImage.save();

    // Respond with success message and saved image data
    res.status(200).json(savedImage);
  } catch (error) {
    console.error("Error in imageUploadI controller:", error);
    res.status(500).json({ error: "Failed to upload the file" });
  }
};

//Get Image V
const getImagesV = asyncHandler(async(req, res) => {
  const images = await ImageV.findOne().sort({ '_id': -1 });
  if(images) {
      res.status(200).json(images)
  }
  else {
      res.status(400)
      throw new Error("Images cannot be found")
  }
})

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

  module.exports = {imageUpload, imageUploadCon,multiImageUpload ,uploadByLink, getAllImages, imageUploadI, imageUploadII, multiImageUploadI, getImagesI, getImagesII, getMultiImage, getMultiImageI, deleteMultiImage, imageUploadIII, getImagesIII, imageUploadIV, getImagesIV, imageUploadV, getImagesV}
