const User = require("../model/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // authentication, login , authorization - is he an admin or not?
const passwordReset = require("../model/passwordReset.js");
const mailer = require("../helper/mailer");
require("dotenv").config();

// register/signup
exports.register = async (req, res) => {
  try {
    const isExisting = await User.findOne({ email: req.body.email });
    if (isExisting) {
      throw new Error("Already an account with this email. Try a new one!");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    const { password, ...others } = newUser._doc;
    const token = jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "5h" }
    );

    return res.status(201).json({ others, token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// login
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("User credentials are wrong!");
    }

    const comparePass = await bcrypt.compare(req.body.password, user.password);
    if (!comparePass) {
      throw new Error("User credentials are wrong!");
    }

    const { password, ...others } = user._doc;
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "5h" }
    );

    return res.status(200).json({ others, token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

//forgot-password
exports.forgotPassword = async (req, res) => {
  try {
    console.log("Forgot password request body: ", req.body);
    const { email } = req.body;
    const userData = await User.findOne({ email });
    // console.log("Email: ", email);
    // console.log("User data: ", userData);
    if (!userData) {
      return res.status(400).json({
        success: false,
        msg: "Email doesn't exists!",
      });
    }
    const randomString = Math.random().toString(36).slice(-8);
    const msg = `<p>Hi ${userData.username}, please click <a href="${process.env.PROD_API || `http://localhost:5173`}/reset-password?token=${randomString}">here</a> to reset your password.</p>`;
    const PasswordReset = await passwordReset({
      user_id: userData._id,
      token: randomString,
    });
    await PasswordReset.save();
    mailer.sendMail(userData.email, "Reset Password", msg);
    return res.status(201).json({
      success: true,
      msg: "Reset Password Link sent to your mail, please check!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: error.message,
    });
  }
};

// reset-password
exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.query;
    console.log("Token: ", token);
    const resetData = await passwordReset.findOne({ token: req.query.token });
    console.log("Reset data: ", resetData);
    if (!resetData) {
      return res.status(404).send("invalid token");
    }
    return res.status(200).json({ resetData });
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

// exports.updatePassword = async(req,res)=> {
//     try {
//         const {password}=req.body.password;
//         console.log("Password: ",password);

//         const {c_password}=req.body.c_password;
//         console.log("Confirm Password: ",c_password);

//         if(password!=c_password)
//         {
//             return res.status(401).json({msg: "Passwords aren't matching"})
//         }
//         console.log("Password update body: ",resetData);
//         const hashedPassword = await bcrypt.hash(c_password,10);
//         await User.findByIdAndUpdate({_id: user_id},{
//             $set: {
//                 password: hashedPassword
//             }
//         });
//         const userData = await User.findOne(user_id);
//         // const userData = await User.findOne({user_id});
//         console.log("User Data: ",userData);
//         const msg= `<p>Dear ${userData.username}, This is to confirm that the password for your account has been successfully changed.</p>`
//         mailer.sendMail(userData.email,"Password updated successful",msg);
//         return res.status(200).json({ msg: "Password updated successfully" });
//     } catch (error) {
//         console.log('Error in updating the password : ', error);
//         return res.status(404).json({msg: "Error"});
//     }
// }

exports.updatePassword = async (req, res) => {
  try {
    const { password, c_password } = req.body;
    let { token } = req.query;
    token = decodeURIComponent(token);
    console.log(token);
    console.log(password);
    console.log(c_password);
    // const resetData = await passwordReset.findOne({user_id});
    const resetData = await passwordReset.findOne({ token: token });
    console.log("Reset Data: ", resetData);
    // if(password!=c_password)
    // {
    //     return res.status(401).json({msg: "Passwords aren't matching"})
    // }
    const hashedPassword = await bcrypt.hash(c_password, 10);
    await User.findByIdAndUpdate(
      { _id: resetData.user_id },
      {
        $set: {
          password: hashedPassword,
        },
      }
    );
    const userData = await User.findById({ _id: resetData.user_id });
    console.log("User Data: ", userData);
    const msg = `<p>Dear ${userData.username}, This is to confirm that the password for your account has been successfully changed.</p>`;
    mailer.sendMail(userData.email, "Password updated successful", msg);
    await passwordReset.deleteMany({ _id: resetData.user_id });
    return res.status(200).json({ msg: "Password updated successfully" });
  } catch (error) {
    console.log("Error in updating the password : ", error);
    return res.status(404).json({ msg: "Error" });
  }
};
