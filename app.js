// app.js

const express = require('express');
const app = express();

app.use(express.json());

// Middleware para métodos HTTP válidos
app.use((req, res, next) => {
    const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];
    if (!validMethods.includes(req.method)) {
        return res.status(400).json({ error: 'Invalid HTTP method' });
    }
    
    next();
});

// Rutas y otros middlewares aquí...

app.listen(4001, () => {
    console.log('Server is running on port 4001');
});
