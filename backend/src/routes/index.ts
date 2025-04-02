import { Router } from 'express';
import { login } from '../controller/auth';

const router = Router();

// Only login route needed
router.post('/login', login);

export default router;