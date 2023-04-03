const karthi=require("../model/data")

exports.put_user=async(req,res)=>{
    try{
        const Item =req.body.item;
        const update=req.body;
        await karthi.findOneAndUpdate(Item,update)
        res.status(200).json("its updated")
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
}
