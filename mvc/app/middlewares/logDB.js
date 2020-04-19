const fs = require('fs');

function logDB(req, res, next) {
    fs.appendFileSync('logDB.txt', 'Registro criado pela url ' + req.url);
    next();
}

module.exports = logDB;