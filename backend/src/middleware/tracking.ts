import { Request, Response, NextFunction } from 'express';
import { Visitor } from '../model/Visitor';
import {UAParser} from 'ua-parser-js';
import requestIp from 'request-ip';

export const trackVisitor = async (req: Request, res: Response, next: NextFunction) => {
  try {

    if (req.path.startsWith('/')) return next();
    
    const ip = requestIp.getClientIp(req) || req.ip;
    const userAgent = req.headers['user-agent'] || '';
    const referrer = req.headers.referer || req.headers.referrer || 'direct';
    
    const parser = new UAParser();
    parser.setUA(userAgent);
    const ua = parser.getResult();
    
    await Visitor.create({
      ip,
      userAgent,
      referrer,
      deviceType: getDeviceType(ua),
      browser: ua.browser.name,
      os: ua.os.name,
      path: req.path
    });
    
    next();
  } catch (err) {
    console.error('Tracking error:', err);
    next();
  }
};

function getDeviceType(ua: UAParser.IResult): string {
  if (ua.device.type) return ua.device.type;
  if (ua.browser.name?.toLowerCase().includes('bot')) return 'bot';
  return 'desktop';
}
