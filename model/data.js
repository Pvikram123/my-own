const Mongoose=require("mongoose")

const userschema=new Mongoose.Schema({
       name:{
           type:String,
           required:true
       },
       id:{
          type:Number,
          required:true
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
            type:Number,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        date:{
           
        }

})
module.exports =  Mongoose.model("karthi",userschema);    
