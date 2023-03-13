const karthi=require("../model/data")

exports.get=async(req,res)=>{
    try{
       const data=await karthi.find();
       res.status(200).json({data})
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
    
      const data=await karthi.find({name:req.query.name})
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