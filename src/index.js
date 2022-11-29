require('dotenv').config();
require('./db/mongoose');


const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const route = require('./routes');


const publicDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');

app.set('view engine', 'hbs');
app.set('views', viewPath);
app.use(express.static(publicDirPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());

route.apiRoute(app);


app.get('/vendor/edit', function (req, res) {
    res.render('addVendor', {
        title: 'Edit Vendor'
    });
})

app.get('/vendor/add', function (req, res) {
    res.render('addVendor', {
        title: 'Add Vendor'
    });
})

app.get('/vendor', function (req, res) {
    res.render('vendor');
})

app.get('/product/edit', function (req, res) {
    res.render('addProduct', {
        title: 'Edit Product'
    });
})

app.get('/product/add', function (req, res) {
    res.render('addProduct', {
        title: 'Add Product'
    });
})

app.get('/product', function (req, res) {
    res.render('product');
})

app.get('/admin/edit', function (req, res) {
    res.render('addAdmin', {
        title: 'Edit Admin'
    });
})

app.get('/admin/add', function (req, res) {
    res.render('addAdmin', {
        title: 'Add Admin'
    });
})

app.get('/admin', function (req, res) {
    res.render('admin');
})

app.get('/user/edit', function (req, res) {
    res.render('addUser', {
        title: 'Edit User'
    });
})

app.get('/user/add', function (req, res) {
    res.render('addUser', {
        title: 'Add User'
    });
})

app.get('/user', function (req, res) {
    res.render('user');
})

app.get('/forget-pwd', function (req, res) {
    res.render('forget_pwd');
})

app.get('/home', function (req, res) {
    res.render('home');
})

app.get('/reg', function (req, res) {
    res.render('reg');
})

app.get('/', function (req, res) {
    res.render('login');
})


app.listen(8081, function () {
    console.log('The server is up on 8081!');
});