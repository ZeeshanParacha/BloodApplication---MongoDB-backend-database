const express = require('express');
const router = express.Router();
const Comments = require('../models/comments')




// Save data to Database
router.post('/AddComment', (req, res) => {
    const newComment = new Comments(req.body)
    newComment.save().then(() => {
        res.send({ message: 'Comment Added Successfully', isComment: true })
    }).catch(e => {
        console.log('e====>', e)
        res.send({ message: e.message, isComment: false })
    })

})

router.post('/getAllComments', (req, res) => {
    Comments.find({ postId: req.body.postId })
        .then((result) => {
            if (result.length == 0) {
                res.send({ message: 'Comments Not found', isComment: false })
            } else {
                res.send({ message: 'Comments Found', isComment: true, result })
            }
        }).catch(e => {
            console.log('e====>', e)
            res.send({ message: e.message })
        })
})
//get All volunteers List
// router.post('/getAllVolunteers', (req, res) => {
//     Users.find({_id :  {$in : req.body.list}})
//     .then((result) => {
//         if(result.length == 0){
//           res.send({ message: 'Volunteers Not found' , isPost : false })
//         }else {
//           res.send({ message: 'Volunteers Found' , isPost : true , result })
//         }
//   }).catch(e => {
//       console.log('e====>', e)
//       res.send({ message: e.message })
//   })
// })



module.exports = router;