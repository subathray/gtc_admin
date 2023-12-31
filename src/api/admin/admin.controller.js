const service = require("./admin.service");
const bcrypt = require('bcrypt');

const getAdmins = async function(req, res){
    try{
        var admins = await service.getAdmins();
        res.status(200).send(admins);
    }catch(e){
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
} 

const saveAdmin = async function(req, res){
    try{
        req.body.password = await bcrypt.hash(req.body.password, 8);
        await service.saveAdmin(req);
        res.status(201).send('User Record Saved Succesfully');
    }catch(e){
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
} 

const updateAdmin = async function(req, res){
    try{
        await service.updateAdmin(req);
        res.status(201).send('User Record updated Succesfully');
    }catch(e){
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
}

const deleteAdmin = async function(req, res){
    try{
        await service.deleteAdmin(req);
        res.status(200).send('User Record Deleted Succesfully');
    }catch(e){
        res.status(500).send("Internal Server Error");
        console.log(e);
    }
}

module.exports = {
    getAdmins,
    saveAdmin,
    updateAdmin,
    deleteAdmin
}