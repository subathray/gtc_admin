const service = require('../../api/admin/admin.service');

const getAdmins = async (req, res) => {
    var adminArr = await service.getAdmins();
    res.render('admin', {
        title: "Admins",
        adminArr
    });
}

const addAdmin = (req, res) => {
    res.render('addAdmin', {
        title: "Add Admin"
    });
}

const editAdmin = (req, res) => {
    res.render('addAdmin', {
        title: "Edit Admin"
    });
}

module.exports = {
    getAdmins,
    addAdmin,
    editAdmin
}