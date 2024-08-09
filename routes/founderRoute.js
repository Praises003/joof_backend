// server/routes/members.js

const express = require('express');
const router = express.Router();
const { getFounder, createFounder,  updateFounder, deleteFounder } = require('../controllers/founderController');

// Fetch all members
router.get('/', getFounder);

router.post('/', createFounder);

// Update a member
router.put('/:id', updateFounder);

// Delete a member
router.delete('/:id', deleteFounder);

module.exports = router;
