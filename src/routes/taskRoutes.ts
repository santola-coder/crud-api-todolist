import * as taskController from '../controllers/taskController';
import { Router } from 'express';


const router = Router();

router.get('/tasks', taskController.getTasks);


export default router;