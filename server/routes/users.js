var express = require('express');
var router = express.Router();
const Users = require('../models/users');
const md5 = require('md5');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function(req,res,next) {
   Users.findById({name:req.body.name},function(err,user){
        if(err){
          console.log(err);
        }
        if(user.length>0){
            
        }
   })
})

module.exports = router;
