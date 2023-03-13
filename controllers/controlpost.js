const karthi=require("../model/data")


const post_user=async(req,res)=>{

    const data = karthi({
        name:req.body.name,
        id:req.body.id,
        product:req.body.product,
        item:req.body.item,
        quantity:req.body.quantity,
        price:req.body.price,
        date:new Date().toLocaleDateString('es-MX')
    })
    try
    {
        const store_user = await data.save();
        res.status(200).json(store_user)
    }
    catch(err){
        res.status(500).json({"not complete":err.message});
    }
}

module.exports = post_user;