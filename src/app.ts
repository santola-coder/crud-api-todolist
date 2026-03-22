import express, { Request, Response } from 'express';
import TaskModel from './models/taskModel';
 import { testConnection } from './config/dbTodo';
 import  taskRoutes from './routes/taskRoutes';

const app = express();
app.use(express.json());


app.use('/api',taskRoutes);

// GET all tasks
// app.get('/tasks', async (req: Request, res: Response) => {
//     try {
//         const tasks = await TaskModel.getAll();
//         res.json(tasks);
//         await testConnection(); 
//     } catch (err: any) {
//         res.status(500).json({ error: err.message });
//     }
// });

// GET task by id
app.get('/tasks/:id', async (req: Request, res: Response) => {
    try {
        const task = await TaskModel.getById(Number(req.params.id));
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

// POST create task
app.post('/tasks', async (req: Request, res: Response) => {
    try {
        const id = await TaskModel.create(req.body);
        res.status(201).json({ message: 'Task created', id });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

// PUT update task
app.put('/tasks/:id', async (req: Request, res: Response) => {
    try {
        const updated = await TaskModel.update(Number(req.params.id), req.body);
        if (!updated) return res.status(404).json({ message: 'Task not found' });
        res.json({ message: 'Task updated' });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE task
app.delete('/tasks/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await TaskModel.delete(Number(req.params.id));
        if (!deleted) return res.status(404).json({ message: 'Task not found' });
        res.json({ message: 'Task deleted' });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));