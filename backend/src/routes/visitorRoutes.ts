import { Router } from 'express';
import { visitorController } from '../controller/VisitorController';
import { trackVisitor } from '../middleware/tracking';

const router = Router();


router.use(trackVisitor);





router.get('/visitors', visitorController.getAllVisitors);
router.get('/visitors/stats', visitorController.getVisitorStats);

export default router;
