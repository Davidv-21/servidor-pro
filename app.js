const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: 'David.env' });
const listEditRouter = require('./list-edit-router');
const listViewRouter = require('./list-view-router');

const app = express();
app.use(express.json());

// Función para verificar el token y proteger las rutas
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token === null) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
}

// Ruta de autenticación
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    res.json({ token });
});

app.use('/edit', listEditRouter); // Usa el router en la ruta /edit
app.use('/view', listViewRouter); // Usa el router en la ruta /view

app.listen(4001, () => {
    console.log('Server is running on port 4001');
});
