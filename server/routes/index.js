const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.js");
const productRoutes = require("./product.js");
const uploadRoutes = require("./upload.js");
const contactRoutes = require("./contact.js");

router.use("/auth", authRoutes);
router.use("/product", productRoutes);
router.use("/upload", uploadRoutes);
router.use("/contact-us", contactRoutes);

router.use((req, res) => {                                  //no routes found
    res.status(404).send("No routes found");
})

module.exports = router;