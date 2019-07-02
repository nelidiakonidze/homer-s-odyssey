const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Done');
});
router.get('/users', function(req, res) {
  res.send('all the users');
});

router.post('/signup', function(req, res) {
  res.send('I am in POST signup');
});

module.exports = router;
