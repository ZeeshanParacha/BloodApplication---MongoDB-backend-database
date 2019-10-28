const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthUser = new Schema({
   

            username : {
                type:String,
                required : true,
                
            
            },
            email : {
                type : String ,
                required: true,
                unique: true,
            },
            bloodgroup : {
                type : String ,
            },
            password : {
                type : String
            },
            token : {
                type: String
            }

        
   
    // friendIds : Array
})


const User = mongoose.model('users' , AuthUser);

module.exports = User;