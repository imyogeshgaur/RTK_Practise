import { Router } from 'express';
import TodoController  from '../controller/todo.controller';
import { authenticate } from '../middleware/authentication';

const todoRouter = Router();
const todoController = new TodoController();

todoRouter.use(authenticate);

todoRouter.post('/', todoController.create);
todoRouter.get('/user/:userId', todoController.getTodosByUser);
todoRouter.get('/:id', todoController.getOne);
todoRouter.put('/:id', todoController.update);
todoRouter.delete('/:id', todoController.delete);

export default todoRouter;
