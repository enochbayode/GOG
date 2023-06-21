const express = require('express');
const mainrouter = express.Router();
const { 
    homeController,
    mapController,
    reportController
 } = require('../controllers/main');

mainrouter.get('/', homeController);

mainrouter.get('/map', mapController);

mainrouter.get('/report', reportController);




module.exports = { mainrouter };