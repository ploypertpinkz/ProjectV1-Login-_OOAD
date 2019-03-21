const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:ooad1234@ds217976.mlab.com:17976/manageexam');

const CoinRouter = require('./routes/CoinRouter');
const LoginRouter = require('./routes/LoginRouter');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/coins', CoinRouter);
app.use('/login', LoginRouter);

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'public', 'index.html'));
});

app.listen(port, function(){
  console.log('Node js Express js Tutorial at port', port);
});


// var urlencodedParser = bodyParser.urlencoded({extended:false});

// app.post('/login', function(req,res){
//   User.findOne({ username: req.body.username}, function(err, User) {
//           if(User === null){
//             console.log("null");
//           }else if (User.username === req.body.username && User.password === req.body.password){
//               res.redirect('/coins');
//          } else {
//            console.log("Credentials wrong");
//          }
//   });
// });

// app.route('/login').post((req, res) => {
//   var username = req.body.username,
//       password = req.body.password;

//   User.findOne({ User : { username: username } }).then(function (user) {
//       if (!user) {
//         res.redirect('/login');
//       } else if (!user.validPassword(password)) {
//         res.redirect('/login');
//       } else {
//         res.redirect('/coins');
//       }
//   });
// });