const passport = require('passport');


let microsoftLogIn = passport.authenticate('microsoft')


// let microsoftLogIn = (req,res)=>{
//     res.send('log in using microsoft')
// }

let microsoftRedirect = (req,res)=>{
    //  we access the user profile using the req.user object
     res.send('redirected')
    //  console.log(req.user) 
}


let microsoftLogOut = (req,res)=>{
    res.send('log out using microsoft')
}

module.exports={microsoftLogIn,microsoftLogOut,microsoftRedirect}