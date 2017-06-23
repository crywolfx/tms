const express = require('express');
const router = express.Router();
const md5 = require('md5');
const Users = require('../models/users');
const Teacher = Users.user;
const Admin = Users.admin;

router.post('/reg', function (req, res, next) {
  Teacher.findOne({  //查一下有没有该用户名
    name: req.body.uname
  }, (err, doc) => {
    if (err) {
      console.log(err);
    }
    if (doc) {
      res.send({
        hasReg: true
      })
    } else {
      const user = new Teacher({
        name: req.body.uname,
        password: req.body.upass
      })
      user.save((err, doc) => {
        if (doc) {
          res.send({
            hasReg: false,
            success: true,
            uname:doc.name,
          })
        }
      })
    }
  })
});

router.post('/checkAdmin',function(req,res,next) {  //检查是否是管理员
    Admin.findOne({
        name:req.body.name,
    },(err,doc)=>{
        if(err){
            console.log(err);
        }
        if(!doc){
            res.send({
                isAdmin:false,
            })
        }else{
            res.send({
                isAdmin:true,
            })
        }
    })
})

router.post('/login',function(req,res,next){
    Teacher.findOne({
        name:req.body.name,
        password:md5(req.body.password),
    },(err,doc)=>{
        if(doc){
            req.session.name=req.body.name;
            res.send({
                success:true,
            })
        }else{
            res.send({
                success:false,
            })
        }
    })
})

router.post('/test',function(req,res){
    console.log(req.header);
    console.log(req.session);
    // res.send(req);
})





module.exports = router;
