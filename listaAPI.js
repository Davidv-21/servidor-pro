const express = require('express');
const app = express();
app.use(express.json());

// Lista de tareas (simulada en memoria)
let tasks = [];

// Ruta para crear una nueva tarea
app.post('/tasks', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json(newTask); // 201 Created
});

// Ruta para actualizar una tarea
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body;

    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada' }); // 404 Not Found
    }

    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
    res.json(tasks[taskIndex]);
});

// Ruta para eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Tarea no encontrada' }); // 404 Not Found
    }

    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask[0]);
});

// Ruta para listar todas las tareas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Ruta para listar tareas completas
app.get('/tasks/completed', (req, res) => {
    const completedTasks = tasks.filter(task => task.completed);
    res.json(completedTasks);
});

// Ruta para listar tareas incompletas
app.get('/tasks/incomplete', (req, res) => {
    const incompleteTasks = tasks.filter(task => !task.completed);
    res.json(incompleteTasks);
});

// Ruta para obtener una sola tarea
app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);
    if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' }); // 404 Not Found
    }
    res.json(task);
});

const PORT = 4001; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});