const express = require('express');
const router = express.Router();

const tasks = [
    {
        id: '123456',
        isCompleted: false,
        description: 'Walk the dog'
    },
    {
        id: '789012',
        isCompleted: true,
        description: 'Buy groceries'
    }
];

router.post('/create', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.json({ message: 'Task created successfully', task: newTask });
});

router.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
        tasks.splice(index, 1);
        res.json({ message: 'Task deleted successfully' });
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

router.put('/:id', (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
        tasks[index] = updatedTask;
        res.json({ message: 'Task updated successfully', task: updatedTask });
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

module.exports = router;
