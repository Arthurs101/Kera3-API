const { Router } = require("express")
const router = new Router();
const controller = require('../controllers/BodegaController');
//get--methods
router.get('/', controller.getManager);

//post--methods
module.exports = router