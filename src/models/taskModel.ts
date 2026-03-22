import db from "../config/dbTodo"
import { Task } from '../types/task';

class TaskModel {
    static async getAll(): Promise<Task[]> {
        const [rows] = await db.query('SELECT * FROM task');
        return rows as Task[];
    }

    static async getById(id: number): Promise<Task | null> {
        const [rows]: any = await db.query('SELECT * FROM task WHERE id = ?', [id]);
        return rows[0] || null;
    }

    static async create(task: Task) {
        const { title, description, priority } = task;
        const [result]: any = await db.query(
            'INSERT INTO task (title, description, priority) VALUES (?, ?, ?)',
            [title, description, priority || 'medium']
        );
        return result;
    }

    static async update(id: number, task: Task) {
        const { title, description, priority } = task;
        const [result] = await db.query(
            'UPDATE task SET title=?, description=?, priority=? WHERE id=?',
            [title, description, priority, id]
        );
        return result;
    }

    static async delete(id: number) {
        const [result] = await db.query('DELETE FROM tasks WHERE id=?', [id]);
        return result;
    }
}

export default TaskModel;