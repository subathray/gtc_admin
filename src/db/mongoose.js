var mongoose = require('mongoose');

console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', function () {
    console.log('MongoDB database connection established successfully for gtc!');
})

