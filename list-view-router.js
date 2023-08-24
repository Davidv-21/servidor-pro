const express = require('express');
const router = express.Router();
const authenticateToken = require('./app').authenticateToken; 



// Ruta protegida
router.get('/:id', authenticateToken, (req, res) => {
    // Código para obtener detalles de una tarea
});

module.exports = router;
