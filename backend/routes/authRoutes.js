const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Verifica que las funciones están exportadas correctamente desde authController
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);

module.exports = router;
