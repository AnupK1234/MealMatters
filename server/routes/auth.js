const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.js");

router.post("/register", authController.register)
router.post("/login", authController.login)
router.post('/forgot-password',authController.forgotPassword)
router.get("/reset-password",authController.resetPassword)
router.post("/reset-password",authController.updatePassword)

module.exports = router;