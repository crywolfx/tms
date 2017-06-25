const express = require('express');
const router = express.Router();
const md5 = require('md5');
const Teacher = require('../models/users');
const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passport')(passport);
// const ensureAuthorized = require('../authorized');

router.post('/reg', function(req, res, next) { //注册
    Teacher.findOne({ //查一下有没有该用户名
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
                password: md5(req.body.upass)
            })
            user.save((err, doc) => {
                if (doc) {
                    res.send({
                        hasReg: false,
                        success: true,
                        uname: doc.name,
                    })
                }
            })
        }
    })
});

router.post('/checkAdmin', function(req, res, next) { //检查是否是管理员
    Admin.findOne({
        name: req.body.name,
    }, (err, doc) => {
        if (err) {
            console.log(err);
        }
        if (!doc) {
            res.send({
                isAdmin: false,
            })
        } else {
            res.send({
                isAdmin: true,
            })
        }
    })
})

router.post('/login', function(req, res, next) { //登录
    Teacher.findOne({
        name: req.body.name,
        password: md5(req.body.password),
    }, (err, doc) => {
        if (doc) {
            let token = jwt.sign({ //生成token
                name: doc.name
            }, "thisisateachermanagersystem", {
                expiresIn: 10080 // token到期时间设置
            });
            doc.token = token;
            doc.save(function(err) {
                if (err) {
                    res.send(err);
                }
            });
            res.json({
                success: true,
                message: '验证成功!',
                token: 'Bearer ' + token,
                name: doc.name
            });
        } else {
            res.send({
                success: false,
            })
        }
    })
})

router.post('/test',
    passport.authenticate('bearer', { session: false }),
    function(req, res) {
        console.log(req.user);
        // res.json({
        //     username: req.user.name
        // });
    });
// router.post('/test', ensureAuthorized, function(req, res) {
//     Teacher.findOne({
//         token: req.token
//     }, function(err, user) {
//         if (err) {
//             res.json({
//                 success: false,
//                 data: "Error occured: " + err
//             });
//         } else {
//             res.json({
//                 success: true,
//                 data: user
//             });
//         }
//     });
// })





module.exports = router;