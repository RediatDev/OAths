let appleLogIn = (req,res)=>{
    res.send('log in using apple')
}
let appleLogOut = (req,res)=>{
    res.send('log out using apple')
}

module.exports={appleLogIn,appleLogOut}