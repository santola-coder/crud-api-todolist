import { Request, Response } from 'express';
import TaskModel from '../models/taskModel';

export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await TaskModel.getAll();
        res.json(tasks);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const getTask = async (req: Request, res: Response) => {
    try {
        const task = await TaskModel.getById(Number(req.params.id));
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const createTask = async (req: Request, res: Response) => {
    try {
        const result = await TaskModel.create(req.body);
        res.status(201).json({ message: 'Task created', id: (result as any).insertId });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const updateTask = async (req: Request, res: Response) => {
    try {
        await TaskModel.update(Number(req.params.id), req.body);
        res.json({ message: 'Task updated' });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    try {
        await TaskModel.delete(Number(req.params.id));
        res.json({ message: 'Task deleted' });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};