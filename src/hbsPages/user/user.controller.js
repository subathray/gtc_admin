const service = require('../../api/user/user.service');

const getUsers = async function(req, res){
    var userArr = await service.getUsers();
    res.render('user', {
        title: "Users",
        userArr
    });
}

const addUser = function(req, res){
    res.render('addUser', {
        title: "Add User"
    });
}

const editUser = function(req, res){
    res.render('editUser', {
        title: "Edit User"
    });
}

module.exports = {
    getUsers,
    addUser,
    editUser
}