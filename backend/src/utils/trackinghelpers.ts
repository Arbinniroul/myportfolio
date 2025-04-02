import { UAParser } from 'ua-parser-js';

export const anonymizeIp = (ip: string): string => {
  if (ip === 'unknown') return ip;
  if (ip.includes('.')) return ip.split('.').slice(0, 2).join('.') + '.0.0';
  if (ip.includes(':')) return ip.split(':').slice(0, 3).join(':') + '::0';
  return ip;
};

export const getDeviceType = (ua: UAParser.IResult): string => {
  if (ua.device?.type) return ua.device.type;
  
  const userAgent = ua.ua?.toLowerCase() ?? '';
  const botKeywords = ['bot', 'crawl', 'spider', 'facebookexternalhit'];
  
  if (botKeywords.some(keyword => userAgent.includes(keyword))) {
    return 'bot';
  }
  
  return userAgent.includes('mobile') ? 'mobile' : 'desktop';
};