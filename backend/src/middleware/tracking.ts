import { Request, Response, NextFunction } from 'express';
import { Visitor } from '../model/Visitor';
import { UAParser } from 'ua-parser-js';
import requestIp from 'request-ip';
import crypto from 'crypto';
import { getDeviceType } from '../utils/trackinghelpers';

const anonymizeIp = (ip: string): string => {
  if (ip === 'unknown') return ip;
  if (ip.includes('.')) return ip.split('.').slice(0, 2).join('.') + '.0.0';
  if (ip.includes(':')) return ip.split(':').slice(0, 3).join(':') + '::0';
  return ip;
};

export const trackVisitor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("Visitor tracking middleware triggered for:", req.path);
    
    // More precise path exclusion
    const excludedPaths = [
      '/api',
      '/admin',        // matches /admin
      '/admin/',       // matches /admin/ and /admin/anything
      '/static',
      '/healthcheck',
      '/_next'
    ];

    // Check for exact matches or path starts with
    const shouldExclude = excludedPaths.some(path => 
      req.path === path || req.path.startsWith(`${path}/`)
    );

    if (shouldExclude) {
      console.log(`Skipping tracking for excluded path: ${req.path}`);
      return next();
    }

    const sessionId = req.cookies?.visitorSession || crypto.randomUUID();
    if (!req.cookies?.visitorSession) {
      res.cookie('visitorSession', sessionId, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
      });
    }

    const rawIp = requestIp.getClientIp(req) ?? req.ip ?? 'unknown';
    const ip = anonymizeIp(rawIp);
    const userAgent = req.headers['user-agent'] ?? '';
    const referrer = req.headers.referer ?? req.headers.referrer ?? 'direct';

    const parser = new UAParser(userAgent);
    const ua = parser.getResult();

    await Visitor.create({
      ip,
      userAgent,
      referrer,
      deviceType: getDeviceType(ua),
      browser: ua.browser.name ?? 'unknown',
      os: ua.os.name ?? 'unknown',
      path: req.path,
      sessionId,
      isNewSession: !req.cookies?.visitorSession
    });

    next();
  } catch (err) {
    console.error('Tracking error:', err);
    next();
  }
};