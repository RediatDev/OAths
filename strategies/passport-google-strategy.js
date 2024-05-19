const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../module/User/User.model');
require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.CALL_BACK_URL
}, (accessToken, refreshToken, profile, done) => {
let userData = profile._json
console.log(userData)
    const newUser = new User({
        firstName: userData.given_name,
        middleName: userData.displayName,  
        lastName: userData.family_name,
        email: userData.email,
    });

    newUser.save()
        .then(user => {
            console.log(`New user added: ${user}`);
            done(null, user); 
        })
        .catch(err => {
            console.error('Error saving user:', err);
            done(err); 
        });

        passport.serializeUser(function (profile, done) {
            done(null, profile);
        });
        
        passport.deserializeUser(function (profile, done) {
            done(null, profile);
        });
        
}));

