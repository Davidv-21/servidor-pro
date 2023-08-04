// list-view-router.js

const express = require('express');
const router = express.Router();

// Middleware para manejar parámetros incorrectos
router.param('id', (req, res, next, id) => {
    if (!/^\d+$/.test(id)) {
        return res.status(400).json({ error: 'Invalid parameter' });
    }
    
    next();
});

// Rutas GET aquí...

module.exports = router;
