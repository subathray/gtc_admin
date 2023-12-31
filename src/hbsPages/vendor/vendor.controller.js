const service = require('../../api/vendor/vendor.service');

const getVendors = async function(req, res){
    var vendorArr = await service.getVendors();
    res.render('vendor', {
        title: "Vendors",
        vendorArr
    });
}

const addVendor = function(req, res){
    res.render('addVendor', {
        title: "Add Vendor"
    });
}

const editVendor = function(req, res){
    res.render('editVendor', {
        title: "Edit Vendor"
    });
}

module.exports = {
    getVendors,
    addVendor,
    editVendor
}