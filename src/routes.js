const apiRoute = function(app){
    // Api Routes
    app.use("/api/users", require("./api/user/index"));
    // app.use("/api/product", require('./api/product/index'));
    app.use("/api/admin", require("./api/admin/index"));
    app.use("/api/vendor", require("./api/vendor"));

    // Hbs Routes

    // app.use("/vendor", require('./hbsPages/vendor'));
    app.use("/users", require('./hbsPages/user'));
    // app.use("/admin", require('./hbsPages/admin'));
    // app.use("/product", require('./hbsPages/product'));
}

module.exports = {
    apiRoute
};