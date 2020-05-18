let express = require('express');
let router = express.Router();

let homeController = require('../controllers/homeController');

router.get('/', homeController.index);
router.post('/contato', homeController.contato);
router.get('/newsletter', homeController.newsletter);

module.exports = router;
