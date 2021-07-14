import express from 'express';
import { registerUser, getUser } from '../controllers/userController';

const userRouter = express.Router();


userRouter.post(
  '/user',
  registerUser,
);

userRouter.get(
  '/users',
  getUser,
);
export default userRouter;
