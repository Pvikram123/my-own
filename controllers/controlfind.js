const { log } = require("console");
const { find } = require("../model/auth_reg");
const karthi=require("../model/data")
const fs = require('fs').promises
const path=require("path")

exports.get=async(req,res)=>{
    try{
       const info=await karthi.find({},{"__v":0,});
      
       a=``
for (let i = 0; i < info.length; i++) {
    ids=`div${i}`
    a=a+`<div style="background: rgb(243, 239, 245); float:left; width:30%;text-align: center; border: solid white ;border-width:30px" id=${ids}> 
    <h2 style="background:rgb(156, 83, 205); color:white">items${i}</h2> <br>
    <p>ItemId : ${info[i]._id}</p>  
    <p>name : ${info[i].name}</p>  
    <p>id : ${info[i].id}</p>  
    <p>product : ${info[i].product}</p>
      <p>item : ${info[i].item}</p> 
       <p>quantity : ${info[i].quantity}</p>
 
        <p>price : ${info[i].price}</p>
 
         <p>date : ${info[i].date}</p> 


         </div>`
}
       res.send(a)
       return;
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
}
                                                                                                                                                                                                                         
exports.getid=async(req,res)=>
{
    try
    { 
        
       const data=await karthi.find({id:req.params.id})
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
}




exports.getname=async(req,res)=>
{
    
    try
    { 
      const data=await karthi.find({name:req.body.name})
       
      a=``
      for (let i = 0; i < data.length; i++) {
          ids=`div${i}`
          a=a+`<div style="background: rgb(243, 239, 245); float:left; width:30%;text-align: center; border: solid white ;border-width:30px" id=${ids}> 
          <h2 style="background:rgb(156, 83, 205); color:white">items${i}</h2> <br>
          <p>ItemId : ${data[i]._id}</p>  
          <p>name : ${data[i].name}</p>  
          <p>id : ${data[i].id}</p>  
          <p>product : ${data[i].product}</p>
            <p>item : ${data[i].item}</p> 
             <p>quantity : ${data[i].quantity}</p>
       
              <p>price : ${data[i].price}</p>
       
               <p>date : ${data[i].date}</p> 
      
      
               </div>`
      }
             res.send(a)
             return;
        
    }   
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
}

exports.getdate=async(req,res)=>
{
    try{
      const data= await karthi.find({date:req.body.date})
      a=``
      for (let i = 0; i < data.length; i++) {
          ids=`div${i}`
          a=a+`<div style="background: rgb(243, 239, 245); float:left; width:30%;text-align: center; border: solid white ;border-width:30px" id=${ids}> 
          <h2 style="background:rgb(156, 83, 205); color:white">items${i}</h2> <br>
          <p>ItemId : ${data[i]._id}</p>  
          <p>name : ${data[i].name}</p>  
          <p>id : ${data[i].id}</p>  
          <p>product : ${data[i].product}</p>
            <p>item : ${data[i].item}</p> 
             <p>quantity : ${data[i].quantity}</p>
       
              <p>price : ${data[i].price}</p>
       
               <p>date : ${data[i].date}</p> 
      
      
               </div>`
      }
             res.send(a)
             return;
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }

}