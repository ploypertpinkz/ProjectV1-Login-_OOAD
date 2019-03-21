const express = require('express');
const app = express();
const LoginRouter = express.Router();
const User = require('../models/User.model');

LoginRouter.route('/').get(function (req, res) {
  User.find(function (err, user){
      if(err){
        console.log(err);
      }
      else {
        res.render('login', {user: user});
      }
    });
});

 // -------------------------------------Find--------------------------------------------------
LoginRouter.route('/').get(function (req, res) {
  const id = req.params.id;
  User.findById(id, function (err, user){
      res.render('login', {user: user});
      res.send({Type: 'GET'})
  });
});

LoginRouter.route('/').post(function (req, res) {
  const userN = req.body.username;
  const passW = req.body.password;
  console.log(req.body);
  // res.send({userN,passW});

  User.findOne({username:userN, password:passW}, function (err, user){
    console.log(user);
    if (!user) {
      console.log('!');
      res.redirect('/login');
    } else if(userN === user.username && passW === user.password){
      console.log('5555');
      console.log({userN, passW});
      res.redirect('/coins');
    } else {
      console.log('x')
      res.redirect('/login');
    }
  });
});




module.exports = LoginRouter;