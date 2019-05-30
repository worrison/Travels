var express = require('express');
var router = express.Router();
const CONN = require('../helpers/dbConnections');//datos de la conexion de la base de datos
const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', async (req, res) => {
  let users = await usersController.getUsers();
  res.render('users', {
    users
  });
});

module.exports = router;