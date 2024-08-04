let express = require('express');
let router = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const saltRounds = 10;
let users = [];    // In-memory store for users

// Middleware to parse request bodies
router.use(bodyParser.urlencoded({ extended: false }));

/* signup page. */
router.get('/', function (req, res, next) {
  res.render('signup', { title: 'Signup' });
});


/* login page. */
router.get('/login', function (req, res, next) {
  res.render('index', { title: 'Log in' });
});



/* signup data. */
router.post('/', async function (req, res, next) {
  
  const { username, password } = req.body;
  console.log(req.body)

  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  console.log(">>>",salt)
  console.log(hash)

  users.push({ username, password: hash });

  res.redirect('/login');

});


/* POST login data. */

router.post('/login', async function (req, res) {
  
  const { username, password } = req.body;
  console.log(req.body)

  const user = users.find(user => user.username === username);
  console.log(user)

  if (!user) {
    return res.send('User not found.');
  }

  const match = await bcrypt.compare(password, user.password);
  console.log(match)

  if (match) {
    res.send('Login successful!');
  } else {
    res.send('Incorrect password.');
  }

});

module.exports = router;




// const password = "SarvaiyaShruti123"

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash)
//   })
// })
