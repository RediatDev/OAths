const passport = require('passport');

let googleLogIn = passport.authenticate('google',{
    scope :['profile','email' ]
})


let googleLogOut = (req,res)=>{ 
    res.send('log out using google')
}

let googleRedirect = (req,res)=>{
     res.send('redirected')
    //  console.log(req.user) 
}

module.exports={googleLogIn,googleLogOut,googleRedirect}