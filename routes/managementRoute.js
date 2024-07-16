// server/routes/members.js

const express = require('express');
const router = express.Router();
const { getAllManagement, createManagement, updateManagement, deleteManagement } = require('../controllers/managementController.js');

// Fetch all members
router.get('/', getAllManagement);

// Create a new member
router.post('/', createManagement);

// Update a member
router.patch('/:id', updateManagement);

// Delete a member
router.delete('/:id', deleteManagement);

module.exports = router;
