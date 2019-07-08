const express = require('express');
const router = express.Router();

const connection = require('../../helpers/db');

router.get('/', function(req, res) {
  res.send('Done');
});
router.get('/users', function(req, res) {
  res.send('all the users');
});

router.post('/signup', function(req, res) {
  console.log(req.body);
  const formData = req.body;
  connection.query('INSERT INTO `users` SET ?', formData, (err, results) => {
    if (err) {
      // If an error has occurred, then the user is informed of the error
      console.log(err);
      res.status(500).send('Error saving a user');
    } else {
      // If everything went well, we send a status "ok".
      res.sendStatus(200);
    }
  });
});
module.exports = router;
