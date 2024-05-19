const passport = require('passport');
const { appleLogIn, appleLogOut } = require('../controllers/appleLogInLogOut');
const { defaultLogIn, defaultLogOut } = require('../controllers/defaultLogInLogOut');
const { googleLogIn, googleLogOut, googleRedirect } = require('../controllers/googleLogInLogOut');
const { microsoftLogIn, microsoftLogOut,microsoftRedirect } = require('../controllers/microsoftLogInLogOut');

const authRout = require('express').Router();


// auth log in 
authRout.get('/login',defaultLogIn)
authRout.post('/logout',defaultLogOut)
// ---------------------------------------
authRout.get('/applogin',appleLogIn)
authRout.post('/applogout',appleLogOut)
// ---------------------------------------
authRout.get('/googlelogin',googleLogIn)
authRout.post('/googlelogout',googleLogOut)
authRout.get('/google/redirect',passport.authenticate('google'), googleRedirect)
// ---------------------------------------
authRout.get('/microsoftLogin',microsoftLogIn)
authRout.post('/microsoftLogout',microsoftLogOut)
authRout.get('/microsoft/redirect', passport.authenticate('microsoft'), microsoftRedirect)
// ---------------------------------------


module.exports ={authRout}


//  post method is used for logout method because of the implimentation of Cross-site request forgery protection  using csrf_token_here