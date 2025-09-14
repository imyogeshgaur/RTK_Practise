import { Request, Response } from 'express';
import TodoService from '../service/todo.service';

const todoService = new TodoService();

class TodoController {
  async create(req: Request, res: Response) {
    try {
      const userId = (req as any).user.userId;
      const todo = await todoService.createTodo(req.body, userId);
      res.status(201).json(todo);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async getTodosByUser(req: Request, res: Response) {
  try {
    const userId = req.params.userId;
    const todos = await todoService.getTodosByUserId(userId);
    res.json(todos);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}
  async getOne(req: Request, res: Response) {
    try {
      const userId = (req as any).user.userId;
      const todo = await todoService.getTodoById(req.params.id, userId);
      if (!todo) return res.status(404).json({ message: 'Todo not found' });
      res.json(todo);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const userId = (req as any).user.userId;
      const updated = await todoService.updateTodo(req.params.id, req.body, userId);
      if (!updated) return res.status(404).json({ message: 'Todo not found or not authorized' });
      res.json(updated);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const userId = (req as any).user.userId;
      const deleted = await todoService.deleteTodo(req.params.id, userId);
      if (!deleted) return res.status(404).json({ message: 'Todo not found or not authorized' });
      res.status(204).send();
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default TodoController