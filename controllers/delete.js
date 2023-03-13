const karthi=require("../model/data")


const delete_user=async(req,res)=>{
    try{
        const Item =req.body.item;
        const  del =  await data.findByIdAndDelete(Item)
        res.status(200).json({"message":`${del.item} is deleted`})
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
}

module.exports=delete_user

