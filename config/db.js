
const mongoose = require("mongoose");

// connection URI
const mongoURI = "mongodb+srv://saylani:saylani123@cluster0-nf61z.mongodb.net/bloodApp?retryWrites=true&w=majority"

// remove deprecation warning of collection.ensureIndex
mongoose.set('useCreateIndex', true);

// connect to mongodb
mongoose.connect(mongoURI, {useNewUrlParser: true , useFindAndModify: false})

module.exports = mongoose;