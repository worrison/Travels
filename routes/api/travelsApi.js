const express = require('express');
const router = express.Router();

const travelsController = require('../../controllers/travelsController');


// El post para crear una pelicula por json
router.post('/', async (req, res) => {
    const travel = {
        destino: req.body.destino,
        precio: req.body.precio,
    };

    let result = await travelsController.addTravel(travel);
    res.send(result);
});

module.exports = router;