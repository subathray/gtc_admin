const Vendor = require("../../models/vendor");

const getUsers = function(){
    try{
        return Vendor.find();
    }catch(e){
        return e;
    }
} 

const saveUser = function(req){
    try{
        var user = new Vendor(req.body);
        return user.save();
    }catch(e){
        return e;
    }
} 

const updateUser = function(req){
    try{
        return Vendor.findByIdAndUpdate(req.params.id, req.body);
    }catch(e){
        return e;
    }
}

const deleteUser = function(req){
    try{
        return Vendor.findByIdAndDelete(req.params.id);
    }catch(e){
        return e;
    }
}

module.exports = {
    getUsers,
    saveUser,
    updateUser,
    deleteUser
}