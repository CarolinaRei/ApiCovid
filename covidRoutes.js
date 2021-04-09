//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

//Import Bio Controller
var covidController = require('./covidController');

// Bio routes
router.route('/novos').get(covidController.novos);

router.route('/intern').get(covidController.inter);

router.route('/max-novos').get(covidController.max);

router.route('/min-novos').get(covidController.min);

router.route('/med-novos').get(covidController.med);

router.route('/tot-novos').get(covidController.tot);

//Export API routes
module.exports = router;