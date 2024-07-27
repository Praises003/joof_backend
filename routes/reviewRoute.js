const express = require('express');
const router = express.Router();
const { submitReview, getAllReviews, approveReview, getApprovedReviews, deleteReview } = require('../controllers/reviewController');

// Submit a new review
router.post('/', submitReview);

// Get all reviews (admin)
router.get('/', getAllReviews);

//Get all approved reviews
router.get('/approved', getApprovedReviews)

// Approve a review
router.put('/:id', approveReview);

// Delete a review
router.delete('/:id', deleteReview)

module.exports = router;
