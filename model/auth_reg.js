const Mongoose=require("mongoose")
const userschema=new Mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    useremail:{
        type:String,
        require:true
    },
    userpassword:{
        type:String,
        require:true
    }
})           
module.exports =  Mongoose.model("karthi1",userschema);       