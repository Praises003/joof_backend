const asyncHandler = require('express-async-handler');
const Founder = require('../models/founderModel')

// Get Corporate Data
const getFounder = asyncHandler(async (req, res) => {
    try {
        const founderData = await Founder.findOne();
        res.status(200).json(founderData);
    } catch (error) {
        res.status(500);
        throw new Error({ message: error.message });
    }
});

// @desc    Create a new founder
// @route   POST /api/founder
// @access  Public
const createFounder = asyncHandler(async (req, res) => {
    const { title, name, image, description, email } = req.body;
    const founder = new Founder({ title, name, image, description, email });
    const newFounder = await founder.save();
    res.status(201).json(newFounder);
  });

const updateFounder = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    try {
        const { title, name, image, description, email } = req.body;
      const founder = await Founder.findById(id)
  
      if (founder) {
        founder.name = name || founder.name
        founder.title = title || founder.title 
        founder.image = image || founder.image
        founder.description = description || founder.description   
        founder.email = email || founder.email
    
        const updatedFounder = await founder.save()
        res.status(200).json(updatedFounder)
  
        } else {
          res.status(404);
          throw new Error('Management not found');
      }
      
      
    } catch (error) {
      res.status(404);
      throw new Error('Management not found');
      
    }

})

// @desc    Delete a founder
// @route   DELETE /api/founder/:id
// @access  Public
const deleteFounder = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const founder = await Founder.findByIdAndDelete(id);
    if (!founder) {
      return res.status(404).json({ success: false, message: 'Not found' });
    }
    res.status(200).json({ success: true, message: 'Member deleted' });
  });


module.exports = {
    getFounder,
    createFounder,
    updateFounder,
    deleteFounder,
    
}