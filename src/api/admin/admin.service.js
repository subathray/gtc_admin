const Admin = require("../../models/admin");

const getAdmins = function(){
    try{
        return Admin.find();
    }catch(e){
        return e;
    }
} 

const saveAdmin = function(req){
    try{
        var admin = new Admin(req.body);
        return admin.save();
    }catch(e){
        return e;
    }
} 

const updateAdmin = function(req){
    try{
        return Admin.findByIdAndUpdate(req.params.id, req.body);
    }catch(e){
        return e;
    }
}

const deleteAdmin = function(req){
    try{
        return Admin.findByIdAndDelete(req.params.id);
    }catch(e){
        return e;
    }
}

module.exports = {
    getAdmins,
    saveAdmin,
    updateAdmin,
    deleteAdmin
}