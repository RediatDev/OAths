const passport = require('passport');
const microsoftStrategy = require('passport-microsoft').Strategy;
const { User } = require('../module/User/User.model');
require('dotenv').config();

passport.use(new microsoftStrategy({
    clientID: process.env.MICROSOFT_CLIENT_ID,
    clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
    callbackURL: process.env.MICROSOFT_CALLBACK_URL,
    scope: ['user.read'],
},(accessToken, refreshToken, profile, done)=>{
    let userData = profile._json
    const newUser = new User({
        firstName: userData.displayName,
        middleName: userData.givenName,  
        lastName: userData.surname,
        email: userData.mail,
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
   
}))



