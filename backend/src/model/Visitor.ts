import { Schema, model, Document } from 'mongoose';

export interface IVisitor extends Document {
  ip: string;
  userAgent: string;
  referrer: string;
  deviceType: string;
  browser: string;
  os: string;
  path: string;
  country?: string;
  city?: string;
  isp?: string;
  visitedAt: Date;
}

const visitorSchema = new Schema<IVisitor>({
  ip: { type: String, required: true },
  userAgent: { type: String, required: true },
  referrer: { type: String, required: true },
  deviceType: { 
    type: String, 
    enum: ['desktop', 'mobile', 'tablet', 'bot', 'unknown'], 
    default: 'unknown' 
  },
  browser: String,
  os: String,
  path: { type: String, required: true },
  country: String,
  city: String,
  isp: String,
  visitedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

// Indexes for better performance
visitorSchema.index({ ip: 1 });
visitorSchema.index({ visitedAt: -1 });
visitorSchema.index({ deviceType: 1 });
visitorSchema.index({ referrer: 1 });

export const Visitor = model<IVisitor>('Visitor', visitorSchema);