const express = require('express');
const app = express();
const port = 4001;

// Importar los módulos de enrutador
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

app.use(express.json());

// Usar los routers en rutas específicas
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
