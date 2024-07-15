// server/controllers/members.js

const asyncHandler = require('express-async-handler');
const Member = require('../models/memberModel');

// @desc    Fetch all members
// @route   GET /api/members
// @access  Public
const getAllMembers = asyncHandler(async (req, res) => {
  const members = await Member.find();
  res.status(200).json(members);
});

// @desc    Create a new member
// @route   POST /api/members
// @access  Public
const createMember = asyncHandler(async (req, res) => {
  const { name, position, imageUrl, socialLinks } = req.body;
  const member = new Member({ name, position, imageUrl, socialLinks });
  const newMember = await member.save();
  res.status(201).json(newMember);
});

// @desc    Update a member
// @route   PATCH /api/members/:id
// @access  Public
const updateMember = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, position, imageUrl, socialLinks } = req.body;
  const updatedMember = await Member.findByIdAndUpdate(id, { name, position, imageUrl, socialLinks }, { new: true });
  if (!updatedMember) {
    return res.status(404).json({ success: false, message: 'Member not found' });
  }
  res.status(200).json(updatedMember);
});

// @desc    Delete a member
// @route   DELETE /api/members/:id
// @access  Public
const deleteMember = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const member = await Member.findByIdAndDelete(id);
  if (!member) {
    return res.status(404).json({ success: false, message: 'Member not found' });
  }
  res.status(200).json({ success: true, message: 'Member deleted' });
});

module.exports = { getAllMembers, createMember, updateMember, deleteMember };
