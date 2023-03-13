const express=require("express")
const router =express.Router()
const post_user=require("../controllers/controlpost")
const find=require("../controllers/update")
const {get,getid,getname,getdate} = require("../controllers/controlfind")
const delete_user=require("../controllers/delete")
const register=require("../auth/authreg.js")
const login = require("../auth/authlog")
const userlogout= require("../auth/authlogout")
const jwt_auth=require("../auth/authvadalation")

router.post('/post',post_user);
router.get('/',get);
router.get('/get/:id',getid);
router.put('/put/:id',find.put_user)
router.get('/get',getname)
router.get('/date',getdate)
// router.delete('/del',delete_user)
// router.post("/reg",register)
// router.post("/log",login)
// router.delete("/out",userlogout)

module.exports=router;
