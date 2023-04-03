const karthi=require("../model/data")

exports.get=async(req,res)=>{
    try{
       const info=await karthi.find({},{"__v":0,"_id":0});
       console.log(info)
       a=``
for (let i = 0; i < info.length; i++) {
    a=a+`<div style=" background:rgb(204, 201, 201); float:left; width:33%; border: solid white;text-align: center"> 
    <h2>items${i}</h2> <br
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
        res.status(200).json({"message":data})
    }   
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
}
exports.getdate=async(req,res)=>
{
    try{
      const data= await karthi.find({date:req.body.date})
          res.status(200).json({"message":data})
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }

}