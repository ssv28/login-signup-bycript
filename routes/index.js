let express = require('express');
let router = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const saltRounds = 10;
let users = []; 

router.use(bodyParser.urlencoded({ extended: false }));

router.post('/signup', async function (req, res, next) {
  const { username, password } = req.body;

  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  users.push({ username, password: hash });

  res.redirect('/login');
});


router.get('/signup', function (req, res, next) {
  res.render('signup', { title: 'Signup' });
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
