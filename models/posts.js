const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostBlood = new Schema({


    bloodgroup: {
        type: String,
    },
    units: {
        type: String,
    },
    urgency: {
        type: String,
    },
    city: {
        type: String
    },
    hospital: {
        type: String
    },
    relation: {
        type: String
    },
    contact : {
        type : Number
    },
    username : {
        type : String
    },
    useremail : {
        type : String
    },
    userId : {
        type : String
    },
    userBloodGroup : {
        type : String
    },
    description : {
        type : String
    },
    volunteer: {
        type : Number
    },
    volunteers : { type : Array , "default" : [] }
   
   
    // friendIds : Array
})


const Postdetail = mongoose.model('Postblood', PostBlood);

module.exports = Postdetail;