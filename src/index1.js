require('dotenv').config();
require('./db/mongoose');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const publicDirPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');

const User = require('./models/user')


const Vendor = require('./models/vendor');
const Product = require('./models/product')
const Admin = require('./models/admin');
const Ad = require('./models/ad');
const Address = require('./models/address');
const Cart = require('./models/cart');
const Category = require('./models/category');
const Country = require('./models/country');
const Order = require('./models/order');
const Payment = require('./models/payment');
const Plan = require('./models/plan');
const Review = require('./models/review');
const State = require('./models/state');
const Subcategory = require('./models/sub_category');
const Wishlist = require('./models/wish_list');


app.set('view engine', 'hbs');
app.set('views', viewPath);
app.use(express.static(publicDirPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));


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

//API
//USER
app.get('/api/user', function (req, res) {
    User.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/user', function (req, res) {  
    var user = new User(req.body);
    user.save().then(function (result) {
        res.status(201).send('User Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    })
})

app.put('/api/user/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('User Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/user/:id', function (req, res) {
    User.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('User Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

//VENDOR
app.get('/api/vendor', function (req, res) {
    Vendor.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/vendor', function (req, res) {  
    var vendor = new Vendor(req.body);
    vendor.save().then(function (result) {
        res.status(201).send('Vendor Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    })
})

app.put('/api/vendor/:id', function (req, res) {
    Vendor.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('Vendor Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/vendor/:id', function (req, res) {
    Vendor.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('Vendor Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

//PRODUCT
app.get('/api/product', function (req, res) {
    Product.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/product', function (req, res) {  
    var product = new Product(req.body);
    product.save().then(function (result) {
        res.status(201).send('Product Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    })
})

app.put('/api/product/:id', function (req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('Product Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/product/:id', function (req, res) {
    Product.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('Product Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

//ADMIN
app.get('/api/admin', function (req, res) {
    Admin.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/admin', function (req, res) {  
    var admin = new Admin(req.body);
    admin.save().then(function (result) {
        res.status(201).send('Admin Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    })
})

app.put('/api/admin/:id', function (req, res) {
    Admin.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('Admin Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/admin/:id', function (req, res) {
    Admin.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('Admin Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

//ADDRESS
app.get('/api/address', function (req, res) {
    Address.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/address', function (req, res) {  
    var address = new Address(req.body);
    address.save().then(function (result) {
        res.status(201).send('Address Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    })
})

app.put('/api/address/:id', function (req, res) {
    Address.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('Address Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/address/:id', function (req, res) {
    Address.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('Address Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

//AD
app.get('/api/ad', function (req, res) {
    Ad.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/ad', function (req, res) {  
    var ad = new Ad(req.body);
    ad.save().then(function (result) {
        res.status(201).send('Ad Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    })
})

app.put('/api/ad/:id', function (req, res) {
    Ad.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('Ad Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/ad/:id', function (req, res) {
    Ad.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('Ad Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

//CART
app.get('/api/cart', function (req, res) {
    Cart.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/cart', function (req, res) {  
    var cart = new Cart(req.body);
    cart.save().then(function (result) {
        res.status(201).send('Cart Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    })
})

app.put('/api/cart/:id', function (req, res) {
    Cart.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('Cart Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/cart/:id', function (req, res) {
    Cart.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('Cart Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

//CATEGORY
app.get('/api/category', function (req, res) {
    Category.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/category', function (req, res) {  
    var category = new Category(req.body);
    category.save().then(function (result) {
        res.status(201).send('Category Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    })
})

app.put('/api/category/:id', function (req, res) {
    Category.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('Category Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/category/:id', function (req, res) {
    Category.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('Category Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

//COUNTRY
app.get('/api/country', function (req, res) {
    Country.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/country', function (req, res) {  
    var country = new Country(req.body);
    country.save().then(function (result) {
        res.status(201).send('Country Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    })
})

app.put('/api/country/:id', function (req, res) {
    Country.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('Country Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/country/:id', function (req, res) {
    Country.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('Country Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

//ORDER
app.get('/api/order', function (req, res) {
    Order.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/order', function (req, res) {  
    var order = new Order(req.body);
    order.save().then(function (result) {
        res.status(201).send('Order Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    })
})

app.put('/api/order/:id', function (req, res) {
    Order.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('Order Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/order/:id', function (req, res) {
    Order.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('Order Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

//PAYMENT
app.get('/api/payment', function (req, res) {
    Payment.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/payment', function (req, res) {  
    var payment = new Payment(req.body);
    payment.save().then(function (result) {
        res.status(201).send('Payment Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    })
})

app.put('/api/payment/:id', function (req, res) {
    Payment.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('Payment Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/payment/:id', function (req, res) {
    Payment.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('Payment Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

//PLAN
app.get('/api/plan', function (req, res) {
    Plan.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/plan', function (req, res) {  
    var plan = new Plan(req.body);
    plan.save().then(function (result) {
        res.status(201).send('Plan Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    })
})

app.put('/api/plan/:id', function (req, res) {
    Plan.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('Plan Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/plan/:id', function (req, res) {
    Plan.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('Plan Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

//REVIEW
app.get('/api/review', function (req, res) {
    Review.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/review', function (req, res) {  
    var review = new Review(req.body);
    review.save().then(function (result) {
        res.status(201).send('Review Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    })
})

app.put('/api/review/:id', function (req, res) {
    Review.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('Review Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/review/:id', function (req, res) {
    Review.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('Review Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

//STATE
app.get('/api/state', function (req, res) {
    State.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/state', function (req, res) {  
    var state = new State(req.body);
    state.save().then(function (result) {
        res.status(201).send('State Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    })
})

app.put('/api/state/:id', function (req, res) {
    State.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('State Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/state/:id', function (req, res) {
    State.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('State Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

//SUB_CATEGORY
app.get('/api/subcategory', function (req, res) {
    Subcategory.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/subcategory', function (req, res) {  
    var subcategory = new Subcategory(req.body);
    subcategory.save().then(function (result) {
        res.status(201).send('Subcategory Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    })
})

app.put('/api/subcategory/:id', function (req, res) {
    Subcategory.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('Subcategory Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/subcategory/:id', function (req, res) {
    Subcategory.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('Subcategory Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

//WISHLIST
app.get('/api/wishlist', function (req, res) {
    Wishlist.find().then(function (result) {
        res.status(200).send(result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error')
        console.log(error);
    })
})

app.post('/api/wishlist', function (req, res) {  
    var wishlist = new Wishlist(req.body);
    wishlist.save().then(function (result) {
        res.status(201).send('Wishlist Record Saved Successfully!');
        console.log('Result:', result);
    }).catch(function (error) {
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

app.put('/api/wishlist/:id', function (req, res) {
    Wishlist.findByIdAndUpdate(req.params.id, req.body).then(function () {
        res.status(201).send('Wishlist Record Updated Successfully!');
    }).catch(function () {
        res.status(500).send('Internal Server Error!');
    })
})

app.delete('/api/wishlist/:id', function (req, res) {
    Wishlist.findByIdAndDelete(req.params.id).then(function(){
        res.status(200).send('Wishlist Record Deleted Successfuly!');
    }).catch(function(error){
        res.status(500).send('Internal Server Error');
        console.log(error);
    })
})

app.listen(8081, function () {
    console.log('The server is up on 8081!');
});