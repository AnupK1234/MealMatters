const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/upload.js");
const { verifyToken } = require("../middlewares/verifyToken.js");

router.post('/image', verifyToken, uploadController.uploadImage);

module.exports = router;