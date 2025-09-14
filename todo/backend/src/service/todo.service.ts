import Todo from '../models/Todo';
import { v4 as uuidv4 } from 'uuid';

class TodoService {
  async createTodo(data: any, userId: string) {
    const todo = await Todo.create({
      todoId: uuidv4(),
      title: data.title,
      description: data.description,
      createdBy: userId,
    });

    return todo;
  }

  async getTodosByUserId(userId: string) {
    return await Todo.findAll({ where: { createdBy: userId } });
  }

  async getTodoById(todoId: string, userId: string) {
    return await Todo.findOne({ where: { todoId, createdBy: userId } });
  }

  async updateTodo(todoId: string, updates: any, userId: string) {
    const todo = await Todo.findOne({ where: { todoId, createdBy: userId } });
    if (!todo) return null;

    await todo.update(updates);
    return todo;
  }

  async deleteTodo(todoId: string, userId: string) {
    const todo = await Todo.findOne({ where: { todoId, createdBy: userId } });
    if (!todo) return null;

    await todo.destroy();
    return true;
  }
}

export default TodoService