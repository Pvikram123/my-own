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
    },
    userphno:{
        type:Number,
        max:9999999999,
        require:true,
        
        },
    dateofbirth:{
        type:String,
        require:true
    },
    date:{

    }
})           
module.exports =  Mongoose.model("karthi1",userschema);       