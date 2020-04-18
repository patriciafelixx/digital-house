const bcrypt = require('bcrypt');

let hash = bcrypt.hashSync('1234', 10);

console.log(hash); // $2b$10$Yaj6oGatBm9O6tG021tNfOObC4.1bsxIyDphdtZzdJXx4HrG2Qv7y
console.log(bcrypt.compareSync('teste123', hash)); // false
console.log(bcrypt.compareSync('1234', hash)); // true