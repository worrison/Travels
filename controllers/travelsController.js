const CONN = require('../helpers/dbConnections');

// Controlador que devuelve una promesa
function getTravels(){
    // Creamos una promesa y la devolvemos
    return new Promise((resolve, reject) => {
        // Hacemos la llamada a la bbdd
        CONN.query('SELECT * FROM travels', (error, rows) => {
            // Cuando la bbdd nos devuelva los datos resolvemos la promesa
            resolve(rows);
        })
    })
}

// Controlador que añade un viaje  y devuelve
function addTravel(travel){
    return new Promise((resolve, reject) => {
        CONN.query("INSERT INTO travels SET ?", [travel], (err, result) => {
            CONN.query("SELECT * FROM travels WHERE id = ?", [result.insertId], (selErr, travel) => {
                resolve(travel[0]);
            });
        });
    })
}
module.exports = {
    getTravels,
    addTravel
}