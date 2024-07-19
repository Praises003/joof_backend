// server/controllers/members.js

const asyncHandler = require('express-async-handler');
const Management = require('../models/managementModel');

// @desc    Fetch all members
// @route   GET /api/members
// @access  Public
const getAllManagement = asyncHandler(async (req, res) => {
  const managements = await Management.find();
  res.status(200).json(managements);
});

// @desc    Create a new member
// @route   POST /api/members
// @access  Public
const createManagement = asyncHandler(async (req, res) => {
  const { name, position, imageUrl, socialLinks } = req.body;
  const management = new Management({ name, position, imageUrl, socialLinks });
  const newManagement = await management.save();
  res.status(201).json(newManagement);
});

// @desc    Update a member
// @route   PUT /api/members/:id
// @access  Public

const updateManagement = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const { name, position, imageUrl, socialLinks } = req.body;
    const management = await Management.findById(id)

    if (management) {
      management.name = name || management.name
      management.position = position || management.position 
      management.imageUrl = imageUrl || management.imageUrl
      management.socialLinks = socialLinks || management.socialLinks   
  
      const updatedManagement = await management.save()
      res.status(200).json(updatedManagement)

      } else {
        res.status(404);
        throw new Error('Management not found');
    }
    
    
  } catch (error) {
    res.status(404);
    throw new Error('Management not found');
    
  }
  
  
});

// @desc    Delete a member
// @route   DELETE /api/members/:id
// @access  Public
const deleteManagement = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const management = await Member.findByIdAndDelete(id);
  if (!management) {
    return res.status(404).json({ success: false, message: 'Member not found' });
  }
  res.status(200).json({ success: true, message: 'Member deleted' });
});

module.exports = { getAllManagement, createManagement, updateManagement, deleteManagement };
