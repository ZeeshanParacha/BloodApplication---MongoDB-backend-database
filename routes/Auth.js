const express = require('express');
const router = express.Router();
const Users = require('../models/userAuth')




// Save data to Database
router.post('/Signup', (req, res) => {
    const user = req.body;
    const newUser = new Users(user)
    newUser.save().then(() => {
        res.send({ message: 'User Added Successfully' , isUser : true })
    }).catch(e => {
        console.log('e====>', e)
        res.send({ message: e.message , isUser : false })
    })
    console.log("User--->", user)
})

router.post('/Login' , (req,res) => {
    console.log('req---->', req.body.email)
      Users.find({email : req.body.email , password : req.body.password})
      .then((result) => {
          if(result.length == 0){
            res.send({ message: 'User Not found' , isUser : false })
          }else {
            res.send({ message: 'User Found' , isUser : true , result })

          }
       
    }).catch(e => {
        console.log('e====>', e)
        res.send({ message: e.message })
    })
})
//get All volunteers List
router.post('/getAllVolunteers', (req, res) => {
    Users.find({_id :  {$in : req.body.list}})
    .then((result) => {
        if(result.length == 0){
          res.send({ message: 'Volunteers Not found' , isPost : false })
        }else {
          res.send({ message: 'Volunteers Found' , isPost : true , result })
        }
  }).catch(e => {
      console.log('e====>', e)
      res.send({ message: e.message })
  })
})
router.get('/sendNotification', (req, res) => {
    Users.find()
    .then((result) => {
        if(result.length == 0){
          res.send({ message: 'Users Not found' , isPost : false })
        }else {
          res.send({ message: 'Users Found' , isPost : true , result })
        }
  }).catch(e => {
      console.log('e====>', e)
      res.send({ message: e.message })
  })
})


module.exports = router;