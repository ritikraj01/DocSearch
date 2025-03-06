const express = require('express');
const router = express.Router({mergeParams:true});
const passport = require('passport');
const {
    signupUser , 
    loginUser , 
    logoutUser} = require('../controllers/usersController.js');


router.post('/login',passport.authenticate('local', {             
    failureRedirect: '/user/login',                
    failureFlash: true,                         
}),loginUser);

router.post('/signup', signupUser);

router.get('/logout', logoutUser);

module.exports = router;