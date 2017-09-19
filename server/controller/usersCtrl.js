var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var User = require('../models/users');
var Common = require('../models/saveUser');
var jwt = require('jsonwebtoken');
var aes256 = require('aes256');
var algorithm = 'aes-256-ctr';
var privateKey = '37LvDSm4XvjYOh9Y';
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var jsonwebtoken = require("jsonwebtoken")


var transporter = nodemailer.createTransport(smtpTransport({
  service: "Gmail",
  auth: {
    user: 'vishaka.renge14@gmail.com',
    pass: 'VISHAKA@14'
  }
}));


/* 
@functionality: Registering users and sending email verification
@author: vishakaR
@created: 4sept
@last_modified: 6sept
@modified_by: [sandeepK]
*/
exports.registerUser = function (req, res, next) {

  //generating token
  var payload = {
    _id: req.body.email
  };
  var token = jsonwebtoken.sign(payload, 'secretKey');

  var data = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    re_email: req.body.re_email,
    password: req.body.password,
    re_password: req.body.re_password,
    city: req.body.city,
    contact: req.body.contact,
    verificationTokenEmailedToUser: token
  });

  //console.log(token)
  var linkToBeSend = "http" + ":" + "//localhost:3000/api/activateAccount?token=" + token
  var link = ' <a href=" ' + linkToBeSend + ' ">CLICK HERE</a> ';
  //console.log(link)

  var mailOptions = {
    from: 'vishaka.renge14@gmail.com',
    to: req.body.email,
    subject: 'Verification Mail',
    html: '<body> <div><h1>You have successfully registered.' + link + 'to activate</h1></div></body>',
    text: 'HIVE Registered'
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {}
  });
  data.save(function (err) {
    if (err) {
      console.log(err);
    } else {}
  });
}


/* 
@functionality: loginUser registered user
@author: vishakaR
@created: 4 sept
@last_modified: 5 sept
@modified_by: [akshayP,sandeepK]
*/
exports.loginUser = function (req, res) {
  User.findOne({
    email: req.body.email,
    password: req.body.password
  }, function (err, authResult) {
    if (err) {
      console.log(err)
    }
    if (authResult && authResult.activateUser) {
      var payload = {
        _id: authResult._id
      };
      var token = jsonwebtoken.sign(payload, 'secretKey');
      //console.log(token)

      User.update({
        email: req.body.email
      }, {
        token: token,
      })

      res.status(200).json(token);
    } else {
      return res.status(299).send({});
    }

  });

  //res.send(authResult);
};



/* 
@functionality: setting verificationTokenEmailedToUser "True"
@author: sandeepK
@created: 6 Sept
@last_modified:
@modified_by: []
*/
exports.verifyUserEmail = function (req, res) {

  //mongo query to set flag
  User.update({
    verificationTokenEmailedToUser: req.query.token
  }, {
    activateUser: true
  }, function (err, doc) {
    if (err) {} else {}
  });
  res.sendFile(path.join(__dirname, '../../public/dist/index.html'));
}