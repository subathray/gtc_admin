const apiRoute = function(app){
    // Api Routes
    app.use("/api/user", require("./api/user/index"));
    app.use("/api/admin", require("./api/admin/index"));
    app.use("/api/vendor", require("./api/vendor"));
    // app.use("/api/product", require('./api/product/index'));


    // Hbs Routes

    app.use("/user", require('./hbsPages/user'));
    app.use("/admin", require('./hbsPages/admin'));
    app.use("/vendor", require('./hbsPages/vendor'));
    
    // app.use("/product", require('./hbsPages/product'));
}

module.exports = {
    apiRoute
};