const multer = require('multer');
const path = require('path');


// Multer storage configuration
const storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   cb(null, './tmp');
  // },
  destination: function (req, file, cb) {
    // Set the destination to the tmp directory relative to the project root
    const tmpDir = path.join(process.cwd(), 'tmp');
    
    // Check if the tmp directory exists, if not, create it
    if (!fs.existsSync(tmpDir)) {
      fs.mkdirSync(tmpDir);
    }
    
    cb(null, tmpDir);
  },
  
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Initialize multer upload middleware with configured storage
const upload = multer({ storage: storage });

module.exports = upload;
