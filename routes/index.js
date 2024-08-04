let express = require('express');
let router = express.Router();

const bcrypt = require('bcrypt');


router.post('/', function (req, res, next) {

  let { username, password } = req.body

  if (username && password) {
    
    
  }

  res.render('signup', { title: 'Sign up' });
});

router.get('/login', function (req, res, next) {
  res.render('index', { title: 'Log in' });
});


module.exports = router;








// const password = "SarvaiyaShruti123"

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash)
//   })
// })
