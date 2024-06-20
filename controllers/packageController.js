const asyncHandler = require("express-async-handler")
const Packages = require("../models/packageModel")


const getAllPackages = asyncHandler(async(req, res) => {
    try {
        const package = await Packages.find()

        if(package) {
            res.status(200).json(package)
        } else {
            res.status(400) 
            throw new Error("no packages")
    }

    } catch (err) {
        res.status(400)
        throw new Error(err)

    }
    
})

const createPackages = asyncHandler(async(req, res) => {
    const {name, description, price } = req.body

    if(!name || !description || !price) {
        res.status(400)
        throw new Error('Fill Up All Fields')
    }

    const packageExists = await Packages.findOne({ name })

    if(packageExists) {
        throw new Error("Package Already Exists")
    }
    
    const newPackage = await Packages.create({
        name, description, price
    })

    if (newPackage) {

        res.status(201).json(newPackage)

    } else {
        res.status(400)
        throw new Error("Creation Failed")
    }

})

const updatePackages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    console.log(req.params)
       try {
        const package = await Packages.findById(id);

        if (package) {
            package.name = name || package.name;
            package.description = description || package.description;
            package.price = price || package.price;

            const updatedPackage = await package.save();
            res.status(200).json(updatedPackage);
        } else {
            res.status(404);
            throw new Error('Package not found');
        }
    } catch (err) {
        res.status(400);
        throw new Error(err);
    }
});

// Function to delete a package by ID
const deletePackages = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPackage = await Packages.deleteOne({ _id: id });

        if (deletedPackage.deletedCount === 1) {
            res.status(200).json({ message: 'Package deleted successfully' });
        } else {
            res.status(404);
            throw new Error('Package not found');
        }
    } catch (err) {
        res.status(400);
        throw new Error(err);
    }
});



module.exports = { getAllPackages, createPackages, updatePackages, deletePackages }
