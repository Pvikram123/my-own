const jwt = require('jsonwebtoken');
const createerror = require('http-errors');

const jwt_auth= (req,res,next) => {
    const token = req.cookies.access_token;
    if(!token){
        return res.send('Access Denied');
    }
    try{
        jwt.verify(token,process.env.TOKEN_KEY,(err,payload)=>{
            if(err){
                res.send("Unauthorized")
            }
            next();})

    }catch(err){
        res.send("Message",err);
    }
}

module.exports = jwt_auth