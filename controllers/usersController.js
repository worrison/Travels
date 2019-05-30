const CONN = require('../helpers/dbConnections');

// Controlador que devuelve una promesa
function getUsers(){
    // Creamos una promesa y la devolvemos
    return new Promise((resolve, reject) => {
        // Hacemos la llamada a la bbdd
        CONN.query('SELECT * FROM usuarios', (error, rows) => {
            // Cuando la bbdd nos devuelva los datos resolvemos la promesa
            resolve(rows);
        })
    })
}

module.exports = {
    getUsers
}