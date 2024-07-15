// server/routes/members.js

const express = require('express');
const router = express.Router();
const { getAllMembers, createMember, updateMember, deleteMember } = require('../controllers/memberController.js');

// Fetch all members
router.get('/', getAllMembers);

// Create a new member
router.post('/', createMember);

// Update a member
router.patch('/:id', updateMember);

// Delete a member
router.delete('/:id', deleteMember);

module.exports = router;
