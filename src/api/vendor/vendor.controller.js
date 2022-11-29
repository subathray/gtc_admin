const Service = require("./vendor.Service");

const getVendors = async function(req, res){
    try{
        var vendors = await Service.getVendors();
        res.status(200).send(vendors);
    }catch(e){
        res.status(500).send("Internal Servor Error!");
    }
}

const saveVendor = async function(req, res){
    try{
        await Service.saveVendor(req);
        res.status(201).send('Vendor Record Saved Succesfully');
    }catch(e){
        res.status(500).send("Internal Server Error");
    }
}

const updateVendor = async function(req, res){
    try{
        await Service.updateVendor(req);
        res.status(201).send('Vendor Record updated Succesfully');
    }catch(e){
        res.status(500).send("Internal Server Error");
    }
}

const deleteVendor = async function(req, res){
    try{
        await Service.deleteVendor(req);
        res.status(200).send('Vendor Record Deleted Succesfully');
    }catch(e){
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    getVendors,
    saveVendor,
    updateVendor,
    deleteVendor
}