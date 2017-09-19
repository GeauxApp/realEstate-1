var express = require('express');
var router = express.Router();

var propertyCtrl = require('./../controller/propetyCtrl');


router.post('/propertyLocation', propertyCtrl.longLatOfProperty)

module.exports = router;