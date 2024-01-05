const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")    
    },
    filename: (req, file, cb) => {
        cb(null, req.body.filename)
    }
})

const upload = multer({
    storage
    // same as storage: storage
})

// req.body.image
exports.uploadImage = (upload.single('image'), (req, res) => {
    try {
        return res.status(201).json({msg: "Successfully uploaded file"})
    } catch (error) {
        console.error(error.message);
    }
})
