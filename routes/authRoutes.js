const express=require("express")
const authrouter =express.Router()
const post_user=require("../controllers/controlpost")
const find=require("../controllers/update")
const {get,getid,getname,getdate} = require("../controllers/controlfind")

authrouter.post('/post',post_user);
authrouter.get('/',get);
authrouter.get('/get/:id',getid);
authrouter.put('/put/',find.put_user)
authrouter.get('/get',getname)
authrouter.get('/date',getdate)

module.exports=authrouter;
