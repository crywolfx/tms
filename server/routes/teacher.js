const express = require('express');
const router = express.Router();
const md5 = require('md5');
const Teacher = require('../models/users');
const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passport')(passport);
// const ensureAuthorized = require('../authorized');
router.post('/checkName', function(req, res) {
    Teacher.findOne({ //查一下有没有该用户名
        name: req.body.uname
    }, (err, doc) => {
        if (err) {
            console.log(err);
        }
        if (doc) {
            res.json({
                success: false,
                msg: "该帐号已被注册"
            })
        } else {
            res.json({
                success: true,
                msg: "该帐号未被注册"
            })
        }

    })

    router.post('/reg', function(req, res, next) { //注册
        const user = new Teacher({
            name: req.body.name,
            password: md5(req.body.pass),
            reName: req.body.reName,
            sex: req.body.sex,
            age: req.body.age,
            health: req.body.health,
            nationality: req.body.nationality,
            native: req.body.native,
            idcard: req.body.idcard,
            email: req.body.email,
            phoneNum: req.body.phoneNum,
            born: req.body.born,
            address: req.body.address,
            school: req.body.school,
            division: req.body.division,
            workyear: req.body.workyear,
            title: req.body.title,
            politics: req.body.politics,
            qualification: req.body.qualification,
        })
        user.save((err, doc) => {
            if (doc) {
                res.json({
                    success: true,
                    uname: doc.name,
                })
            }
        })
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
                data: doc
            });
        } else {
            res.send({
                success: false,
            })
        }
    })
})

router.post('/test',
    passport.authenticate('bearer', {
        session: false
    }),
    function(req, res) {
        console.log(req.user);
        // res.json({
        //     username: req.user.name
        // });
    });






module.exports = router;