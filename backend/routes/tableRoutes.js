const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');

// Asegúrate de que las funciones en tableController están definidas
router.get('/create', tableController.createTable);
router.post('/create', tableController.createTablePost);
router.get('/list', tableController.listTables);
// Añade otras rutas y controladores según sea necesario

module.exports = router;
