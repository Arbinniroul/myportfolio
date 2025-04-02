import { UserDocument } from '../models/User';

declare global {
    declare module 'cors';
declare module 'dotenv';
  namespace Express {
    interface Request {
      user?: UserDocument;
    }
  }
}