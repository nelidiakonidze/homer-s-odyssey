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
  // const rowData = req.body;
  // const newUser = {
  //   email: rowData.email,
  //   password: rowData.password,
  //   name: rowData.name,
  //   lastname: rowData.lastname,
  // };

  const {flash, ...newUser} = req.body;
  //console.log(rowData);
  connection.query('INSERT INTO `users` SET ?', newUser, (err, results) => {
    // connection.release();
    if (err) {
      // the user is informed of the error
      console.log(err);
      res.status(500).json({flash: error.message});
    } else {
      // If everything went well, we send a status "ok".
      res.sendStatus(200).json({flash: 'User has been signed up!'});
    }
  });
});
module.exports = router;
