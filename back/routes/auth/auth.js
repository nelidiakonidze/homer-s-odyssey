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
  const {flash, ...newUser} = req.body;

  // console.log(rowData);
  connection.query('INSERT INTO `users` SET ?', newUser, (err, results) => {
    // connection.release();
    if (err) {
      // the user is informed of the error
      console.log(err);
      res.status(500).json({flash: err.message});
    } else {
      // If everything went well, we send a status "ok".
      res.status(200).json({flash: 'User has been signed up!'});
    }
  });
});
module.exports = router;
