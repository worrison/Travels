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

router.get('/add', async(req, res) =>{
  res.render('travels/add');
});


// Post que se llama desde el formulario
router.post('/add', async (req, res) => {
    console.log(req.body)
    let result = await travelsController.addTravel(req.body);
    res.render('travels/added', {result});
})





module.exports = router;