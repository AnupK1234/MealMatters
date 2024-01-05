const User = require('../model/user.js')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken') // authentication, login , authorization - is he an admin or not?
const dotenv = require("dotenv");
dotenv.config();

// register/signup
exports.register = async (req, res) => {
    try {
        const isExisting = await User.findOne({ email: req.body.email })
        if (isExisting) {
            throw new Error("Already an account with this email. Try a new one!")
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await User.create({ ...req.body, password: hashedPassword })
        const { password, ...others } = newUser._doc
        const token = jwt.sign({ id: newUser._id, isAdmin: newUser.isAdmin }, process.env.JWT_SECRET, { expiresIn: "5h" })

        return res.status(201).json({ others, token })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// login
exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            throw new Error("User credentials are wrong!")
        }

        const comparePass = await bcrypt.compare(req.body.password, user.password)
        if (!comparePass) {
            throw new Error("User credentials are wrong!")
        }

        const { password, ...others } = user._doc
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "5h" })

        return res.status(200).json({ others, token })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}