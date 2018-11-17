var User=require('../db/models/users.js');

  var express=require('express');
  var randomstring = require("randomstring");
  var bcrypt = require('bcrypt');
  var Promise = require('bluebird');
  var router=express.Router();
  var bodyParser=require('body-parser');
  router.use(bodyParser.urlencoded({extended:false}));
  router.use(bodyParser.json());

  router.post('/signup',(req,res)=>{
    var userInfo = req.body;
    // var idString = "u-" + randomstring.generate({ charset: 'alphanumeric', length: 15, capitalization: false});
    // userInfo._id = idString;

    return bcrypt.hash(userInfo.password, 2).then(function(hash) {
        userInfo.password = hash;
        var user = new User(userInfo);
        user.save((err,data)=>{
            if(err){
                res.send(err);
            }
            res.send(data);
        });
    });
   
  });

  router.post('/signin',(req,res)=>{
    var userInfo = req.body;
    
    // return new Promise(function(resolve,reject){
        User.findOne({"username":userInfo.username},function(err, result){
            if(err)
                return res.send(err);
            if(!result){
                var resp = {};
                resp.message = "not a valid user name";
                res.status(400);
                return res.send(resp);
            }
        return bcrypt.compare(userInfo.password, result.password).then(function(isValid) {
            console.log(isValid);
            // console.log(err);
            if(isValid){
                var resp = {};
                resp.message = "success";
                res.status(201);
                return res.send(resp);
            }
            else{
                // resp = {};
                // resp.errors = errors;
                // res.status(401);
                // res.setHeader('response-error-description', JSON.stringify(resp));
                // res.json(resp);
                return res.send("failure");
            }
        });

    });
    // });
  });




module.exports=router;//it is complsury(error made here)