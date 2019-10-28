const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comments = new Schema({


    comment: {
        type: String,
    },
    postId : {
        type : String
    },
    users : {
       type : String
    }
})


const userComments = mongoose.model('comments', comments);

module.exports = userComments;