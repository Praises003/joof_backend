const asyncHandler = require('express-async-handler');
const Review = require('../models/ReviewModel');

// Submit a new review
const submitReview = asyncHandler(async (req, res) => {
  const { author, text } = req.body;

  if (!author) {
    res.status(400)
    throw new Error("Input Your Name")
  }

  if (!text) {
    res.status(400)
    throw new Error("Input Your Review")
  }

  const review = new Review({
    author,
    text
  });

  const createdReview = await review.save();
  if(createdReview) {
    res.status(201).json(createdReview);
  } else {
    res.status(400)
    throw new Error("Unable to create review")
  }
  
});

// Get all reviews (for admin approval)
const getAllReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({});
  res.json(reviews);
});

// Get all approved reviews
const getApprovedReviews = asyncHandler(async (req, res) => {
    const reviews = await Review.find({ isApproved: true });
    res.json(reviews);
  });

// Approve a review
const approveReview = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const review = await Review.findById(id);

  if (review) {
    review.isApproved = true;
    const updatedReview = await review.save();
    res.json(updatedReview);
  } else {
    res.status(404);
    throw new Error('Review not found');
  }
});

// Delete a review
const deleteReview = asyncHandler(async (req, res) => {

    const { id } = req.params;

    try {
        const deletedReview = await Review.deleteOne({ _id: id });

        if (deletedReview.deletedCount === 1) {
            res.status(200).json({ message: 'Review deleted successfully' });
        } else {
            res.status(404);
            throw new Error('Review not found');
        }
    } catch (err) {
        res.status(400);
        throw new Error(err);
    }
   
  });

module.exports = {
  submitReview,
  getAllReviews,
  approveReview,
  getApprovedReviews,
  deleteReview
};
