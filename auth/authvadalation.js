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
                //const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message
                
                res.send("Unauthorized")//next(createerror.Unauthorized(message));
            }
            //req.body = payload;
            next();})
        
        // console.log(verified);
        // req.user = verified
        // next()

    }catch(err){
        console.log("Message",err);
    }
}

module.exports = jwt_auth