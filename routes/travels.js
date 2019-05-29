var express = require('express');
const CONN = require('../helpers/dbConnections');//datos de la conexion de la base de datos
const travelsController = require('../controllers/travelsController');
var router = express.Router();

/* GET travels listing. */
router.get('/', async(req, res) =>{
    let travels= await travelsController.getTravels();
  res.render('travels',{
      travels
  });
});

module.exports = router;