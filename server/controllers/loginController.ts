import Login from '../models/loginModel.ts';
import { Response, Request, NextFunction } from 'express';

interface SessionInterface extends Request {
  session?: any;
}
const loginController: any = {
  //this will get all users from the login database
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await Login.find({});
      res.status(200).json(users);
    } catch (err: any) {
      console.log('error in getAllUsers:', err.message);
      return res.status(500).json({ error: 'Failed to get users' });
    }
  },
  verifyUser: async (
    req: SessionInterface,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { username, password } = req.body;

    if (!username || !password) next(new Error('missing user or password'));

    try {
      const existing = await Login.findOne({ username, password });

      if (!existing) res.status(400).json({ error: 'User not found' });

      res.locals.login = existing;
      next();
      return;
    } catch (err: unknown) {
      if (err instanceof Error) throw new Error(`Error ${err.message}`);
      else throw new Error('There was an eror fetching your account');
    }
  },
  createUser: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        next({ err: 'missing username or password in request body' });
        return;
      }
      if (password.length < 6) {
        res
          .status(400)
          .json({ err: 'password must be at least 6 characters long' });
        return;
      }
      const newLogin = new Login({ username, password });
      await newLogin.save();

      res.locals.newLogin = newLogin;
      next();
      return;
    } catch (err: any) {
      console.log('error in createUser:', err.message);
      next({ err: `loginController.createUser failed: ${err.message}` });
      return;
    }
  },
};

export default loginController;
