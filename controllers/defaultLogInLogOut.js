let defaultLogIn = (req,res)=>{
    res.send('default log in ')
}
let defaultLogOut = (req,res)=>{
    res.send('default log out ')
}

module.exports={defaultLogIn,defaultLogOut}