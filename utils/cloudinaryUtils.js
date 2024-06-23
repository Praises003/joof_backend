// cloudinaryUtils.js

const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// Function to upload an image to Cloudinary
const uploadImageToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "test", // Optional folder to store the uploaded images in Cloudinary
    });
    return { public_id: result.public_id, url: result.secure_url };
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error;
  }
};

const deleteImageFromCloudinary = async (publicId) => {
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      return result;
    } catch (error) {
      console.error('Error deleting image from Cloudinary:', error);
      throw error;
    }
  };

  // Function to upload a video to Cloudinary
const uploadVideoToCloudinary = async (file) => {
  try {
        const result = await cloudinary.uploader.upload(file, {
      resource_type: 'video',
      folder: 'videos', // Optional folder to store the uploaded videos in Cloudinary
    });
    return { public_id: result.public_id, url: result.secure_url };
  } catch (error) {
    console.error('Error uploading video to Cloudinary:', error);
    throw error;
  }
};
  

module.exports = { uploadImageToCloudinary, deleteImageFromCloudinary, uploadVideoToCloudinary };
