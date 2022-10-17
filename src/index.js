const express = require('express');
const app = express();
const path = require('path');

const publicDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');

app.set('view engine', 'hbs');
app.set('views', viewPath);
app.use(express.static(publicDirPath));

app.get('/vendor/edit', function(req, res){
    res.render('addVendor', {
        title: 'Edit Vendor'
    });
})

app.get('/vendor/add', function(req, res){
    res.render('addVendor', {
        title: 'Add Vendor'
    });
})

app.get('/vendor', function(req, res){
    res.render('vendor');
})

app.get('/product/add', function(req, res){
    res.render('addProduct');
})

app.get('/product', function(req, res){
    res.render('product');
})

app.get('/admin/edit', function(req, res){
    res.render('addAdmin', {
        title: 'Edit Admin'
    });
})

app.get('/admin/add', function(req, res){
    res.render('addAdmin', {
        title: 'Add Admin'
    });
})

app.get('/admin', function(req, res){
    res.render('admin');
})

app.get('/user/add', function(req, res){
    res.render('addUser');
})

app.get('/user', function(req, res){
    res.render('user');
})

app.get('/forget-pwd', function(req, res){
    res.render('forget_pwd');
})

app.get('/reg1', function(req, res){
    res.render('reg1');
})

app.get('/reg', function(req, res){
    res.render('reg');
})

app.get('/home', function(req, res){
    res.render('home');
})

app.get('/login', function(req, res){
    res.render('login');
})

app.listen(8081, function() {
    console.log('The server is up on 8081!');
})