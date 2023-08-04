// list-edit-router.js

const express = require('express');
const router = express.Router();

// Middleware para manejar errores en POST y PUT
router.use((req, res, next) => {
    if ((req.method === 'POST' || req.method === 'PUT') && !req.body) {
        return res.status(400).json({ error: 'Empty body' });
    }

    if (req.method === 'POST') {
        const { id, isCompleted, description } = req.body;
        if (!id || typeof isCompleted !== 'boolean' || !description) {
            return res.status(400).json({ error: 'Invalid or missing data' });
        }
    } else if (req.method === 'PUT') {
        const { isCompleted, description } = req.body;
        if (isCompleted === undefined && !description) {
            return res.status(400).json({ error: 'No valid data to update' });
        }
    }
    
    next();
});

// Rutas POST, DELETE, PUT aquí...

module.exports = router;
