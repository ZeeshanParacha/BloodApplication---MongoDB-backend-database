const express = require('express');
const router = express.Router();
const PostBlood = require('../models/posts')




// Save data to Database
router.post('/AddPost', (req, res) => {
    const user = req.body;
    const newUser = new PostBlood(user)
    newUser.save().then(() => {
        res.send({ message: 'Post Added Successfully' , isUser : true })
    }).catch(e => {
        console.log('e====>', e)
        res.send({ message: e.message , isUser : false })
    })
    console.log("User--->", user)
})

router.get('/getAllPosts', (req, res) => {
    PostBlood.find()
    .then((result) => {
        res.send({result})
  }).catch(e => {

      
      console.log('e====>', e)
      res.send({ message: e.message })
  })
})
// get specific user post 
router.post('/getUserPost', (req, res) => {
    PostBlood.find({_id : req.body._id})
    .then((result) => {
        if(result.length == 0){
          res.send({ message: 'Post Not found' , isPost : false })
        }else {
          res.send({ message: 'Post Found' , isPost : true , result })

        }
     
  }).catch(e => {
      console.log('e====>', e)
      res.send({ message: e.message })
  })
})


router.post('/getMyPost', (req, res) => {
    PostBlood.find({userId : req.body._id})
    .then((result) => {
        if(result.length == 0){
          res.send({ message: 'Post Not found' , isPost : false })
        }else {
          res.send({ message: 'Post Found' , isPost : true , result })

        }
     
  }).catch(e => {
      console.log('e====>', e)
      res.send({ message: e.message })
  })
})
//get list of volunteers



// Save data to Database
router.post('/AddVolunteer', (req, res) => {
   
    PostBlood.findByIdAndUpdate({_id:req.body._id}, { $inc: { volunteer : 1 } , $push: { volunteers :  {
        "_id": req.body.volunteers,
        "donation": 'Not Donated'
      }  }})
    .then((result) => {
        if(result.length == 0){
          res.send({ message: 'No Post Found' , isPost : false })
        }else {
          res.send({result })
        }
  }).catch(e => {
      console.log('e====>', e)
      res.send({ message: e.message })
  })
})

router.post('/donated', (req, res) => {
   
    PostBlood.findByIdAndUpdate({_id:req.body._id}, { $set: { volunteers :  {
        "_id": req.body.volunteers,
        "donation": 'Donated'
      }  }})
    .then((result) => {
        if(result.length == 0){
          res.send({ message: 'No Post Found' , isPost : false })
        }else {
          res.send({result })
        }
  }).catch(e => {
      console.log('e====>', e)
      res.send({ message: e.message })
  })
})


module.exports = router;