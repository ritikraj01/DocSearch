const User = require('../models/user.js');  


const signupUser = async (req, res) => {
    try{
        const {email,name,username,password }=req.body;
        const newUser = new User({email,name,username});
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
        if (err) {
            return res.status(400).json({ message: "signup error"  , error : `${err}`});
        }
        res.status(200).json({ message: "success" });
    });}catch(err){
        res.status(400).json({ message: "User already exists" });
    }
};

const loginUser = async (req, res) => {
    console.log(req.user._id);
    res.status(200).json({ userId :req.user._id ,  message: "login successful" });
};

const logoutUser = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.status(200).json({message: "logout successful" });
    });
};


module.exports = { signupUser , loginUser , logoutUser};