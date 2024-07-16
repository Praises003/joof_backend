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
// @route   PATCH /api/members/:id
// @access  Public
const updateManagement = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, position, imageUrl, socialLinks } = req.body;
  const updatedManagement = await Member.findByIdAndUpdate(id, { name, position, imageUrl, socialLinks }, { new: true });
  if (!updatedManagement) {
    return res.status(404).json({ success: false, message: 'Member not found' });
  }
  res.status(200).json(updatedManagement);
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
