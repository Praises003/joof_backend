const multer = require("multer")

// Multer storage configuration
const storage = multer.diskStorage({});

// Multer upload instance
// const videoUpload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 10 * 1024 * 1024, // 10MB max file size
//   },
//   fileFilter: (req, file, cb) => {
//     if (!file.originalname.match(/\.(mp4|avi|mkv)$/)) {
//       return cb(new Error('Only video files are allowed'));
//     }
//     cb(null, true);
//   },
// };

const videoUpload = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if(ext !== '.mp4' && ext !== ".mkv" && ext !== ".jpeg" && ext !== ".jpg" && ext !== ".png") {
            cb(new Error("File type is not supported"), false);
            return;
        }
        cb(null, true)
    },
});

module.exports = videoUpload