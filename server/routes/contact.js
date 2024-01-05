const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact.js");

router.post("/" , contactController.createContact)

module.exports = router;