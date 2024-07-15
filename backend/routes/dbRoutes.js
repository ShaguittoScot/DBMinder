const express = require('express');
const router = express.Router();
const dbController = require('../controllers/dbController');

// Asegúrate de que las funciones en dbController están definidas
router.get('/create', dbController.createDatabase);
router.post('/create', dbController.createDatabasePost);
router.get('/list', dbController.listDatabases);
// Añade otras rutas y controladores según sea necesario

module.exports = router;

