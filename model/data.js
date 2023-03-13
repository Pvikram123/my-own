const Mongoose=require("mongoose")

const userschema=new Mongoose.Schema({
       name:{
           type:String,
       },
       id:{
          type:Number,
       },
        product:{
            type:String,
            required:true
        },
        item:{
            type:String,
            required:true
        },
        quantity:{
            type:String,
            required:true
        },
        price:{
            type:String,
        },
        date:{
           
        }

})
module.exports =  Mongoose.model("karthi",userschema);    
