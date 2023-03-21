const express=require("express")
const router =express.Router()
const jwt_auth=require('../auth/authvadalation')
const register=require("../auth/authreg.js")
const login = require("../auth/authlog")
const userlogout= require("../auth/authlogout")
const delete_user=require("../controllers/delete")
const {get,getid,getname,getdate} = require("../controllers/controlfind")

router.post("/reg",register)
router.post("/log",login)
router.delete("/out",userlogout)
router.delete('/del/',jwt_auth,delete_user)
router.get('/',get);
router.get('/get',getname)
module.exports=router
