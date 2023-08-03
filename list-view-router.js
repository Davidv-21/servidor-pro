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

router.get('/completed', (req, res) => {
    const completedTasks = tasks.filter(task => task.isCompleted);
    res.json(completedTasks);
});

router.get('/incomplete', (req, res) => {
    const incompleteTasks = tasks.filter(task => !task.isCompleted);
    res.json(incompleteTasks);
});

module.exports = router;