import { VisitorData } from './types';

export const collectVisitorData = async (): Promise<VisitorData> => {
  const userAgent = navigator.userAgent;
  const browser = getBrowser(userAgent);
  const os = getOS(userAgent);
  const device = getDevice(userAgent);

  // Get IP address using a public API
  const ipResponse = await fetch('https://api.ipify.org?format=json');
  const ipData = await ipResponse.json();

  return {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    ip: ipData.ip,
    browser,
    os,
    device,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language,
    referrer: document.referrer || 'Direct',
    path: window.location.pathname,
  };
};

const getBrowser = (userAgent: string): string => {
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Safari')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  return 'Other';
};

const getOS = (userAgent: string): string => {
  if (userAgent.includes('Windows')) return 'Windows';
  if (userAgent.includes('Mac')) return 'MacOS';
  if (userAgent.includes('Linux')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('iOS')) return 'iOS';
  return 'Other';
};

const getDevice = (userAgent: string): string => {
  if (userAgent.includes('Mobile')) return 'Mobile';
  if (userAgent.includes('Tablet')) return 'Tablet';
  return 'Desktop';
};