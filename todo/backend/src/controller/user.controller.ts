import { Request, Response } from 'express';
import UserService from '../service/user.service';

const userService = new UserService();

export class UserController {
  async register(req: Request, res: Response) {
    try {
      const user = await userService.register(req.body);
      res.status(201).json(user);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { emailOfUser, password } = req.body;
      const result = await userService.login(emailOfUser, password);
      res.status(200).json(result);
    } catch (err: any) {
      res.status(401).json({ message: err.message });
    }
  }
}
