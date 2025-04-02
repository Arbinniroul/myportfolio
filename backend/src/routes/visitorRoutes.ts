import { Router } from 'express';
import { visitorController } from '../controller/VisitorController';
import { trackVisitor } from '../middleware/tracking';

const router = Router();


const trackingExcludedRoutes = [
  '/api',
  '/admin', 
  '/login',
  '/static', 
  '/healthcheck', 
  '/_next',
  '/favicon.ico',
  '/visitors/stats'
];


router.use((req, res, next) => {
  if (trackingExcludedRoutes.some(route => req.path.startsWith(route))) {
    return next();
  }
  trackVisitor(req, res, next);
});


router.get('/visitors', (req, res, next) => {
  visitorController.getAllVisitors(req, res).catch(next);
});

router.get('/visitors/stats', (req, res, next) => {
  visitorController.getVisitorStats(req, res).catch(next);
});

router.get('/visitors/session/:sessionId', (req, res, next) => {
  visitorController.getVisitorBySession(req, res).catch(next);
});

router.get('/visitors/excluded-routes', (req, res, next) => {
  visitorController.getExcludedRoutes(req, res).catch(next);
});

export default router;