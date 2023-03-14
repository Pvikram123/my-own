const karthi = require("../model/data")


const delete_user = async (req, res) => {
    try {
        const id = req.body.id;
        const del = await karthi.findByIdAndDelete(id)
        res.status(200).json({ "message": `${del.name} is deleted` })

    }
    catch (err) {
        res.status(500).json({ "not complete": err.message });
    }
}

module.exports = delete_user

