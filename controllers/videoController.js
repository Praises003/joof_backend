const asyncHandler = require('express-async-handler')

const Video = require("../models/videoModel")

const { uploadVideoToCloudinary } = require("../utils/cloudinaryUtils")


const uploadVideo = asyncHandler( async (req, res) => {
    try {
        console.log(req.files.video.tempFilePath)
      if (!req.files || !req.files.video) {
        return res.status(400).json({ message: 'No video file uploaded' });
      }

      const videoFile = req.files.video;
  
      // Upload video to Cloudinary
      const cloudinaryResult = await uploadVideoToCloudinary(videoFile.tempFilePath);
  
      // Create new video document
      const newVideo = new Video({
        id: cloudinaryResult.public_id,
        videoUrl: cloudinaryResult.url, // Store Cloudinary URL in MongoDB
      });
  
      // Save video to MongoDB
      await newVideo.save();
  
      res.json({ message: 'Video uploaded successfully', newVideo });
    } catch (error) {
      console.error('Error uploading video:', error);
      res.status(500).json({ message: 'Upload failed', error: error.message });
    }
  });

  const getVideo = asyncHandler(async(req, res) => {
    const video = await Video.findOne().sort({ '_id': -1 });
    if(video) {
        res.status(200).json(video)
    }
    else {
        res.status(400)
        throw new Error("Video cannot be found")
    }
  })

  module.exports = {uploadVideo, getVideo}