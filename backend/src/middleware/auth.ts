import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../model/User';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

interface JwtPayload {
  userId: string;
}

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new Error('No token provided');

    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    const user = await User.findById(decoded.userId);
    
    if (!user) throw new Error('User not found');
    
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: error instanceof Error ? error.message : 'Authentication failed' });
  }
};