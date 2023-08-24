const express = require('express');
const router = express.Router();
const authenticateToken = require('./app').authenticateToken;

// Rutas protegidas
router.post('/create', authenticateToken, (req, res) => {
    // Código para crear una tarea
    res.send('Tarea creada exitosamente');
});

router.delete('/:id', authenticateToken, (req, res) => {
    // Código para eliminar una tarea
    res.send(`Tarea con ID ${req.params.id} eliminada exitosamente`);
});

router.put('/:id', authenticateToken, (req, res) => {
    // Código para actualizar una tarea
    res.send(`Tarea con ID ${req.params.id} actualizada exitosamente`);
});

module.exports = router;

