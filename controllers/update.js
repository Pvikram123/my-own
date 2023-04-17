const karthi=require("../model/data")

exports.put_user=async(req,res)=>{
    try{
        const Item =req.body.item;
        const update=req.body;
        await karthi.findOneAndUpdate(Item,update)
        res.send(`<body style="background-repeat: no-repeat;background-size:100%; background-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fsoftware-upgrade.html&psig=AOvVaw30nSPMH4baWcjeAHrVKzbO&ust=1681817142152000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPiGxZznsP4CFQAAAAAdAAAAABAT')";></body>`)
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
}
