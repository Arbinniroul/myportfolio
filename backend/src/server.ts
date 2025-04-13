import 'express-async-errors'; // Add this at top for async error handling
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './routes';
import connectDB from './connection/db';
import vistorRoutes from './routes/visitorRoutes';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;


connectDB().catch(err => {
  console.error('Database connection failed', err);
  process.exit(1);
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.PRODUCTION_URL!, process.env.URL!]
    : process.env.URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
}

// Routes
app.use('/api/auth', authRouter);
app.use('/api', vistorRoutes);


app.get('/ping', (req, res) => {
  res.status(200).json({ 
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});


app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: 'Endpoint not found'
  });
});


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(`[${new Date().toISOString()}] ERROR:`, err.stack);
  
  res.status(500).json({
    status: 'error',
    message: process.env.NODE_ENV === 'production'
      ? 'Internal server error'
      : err.message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  });
});

// Start server only in development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode`);
    console.log(`Listening on http://localhost:${PORT}`);
  });
}

// Security headers middleware (add this before routes)
app.use((req, res, next) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Content-Security-Policy': "default-src 'self'",
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  });
  next();
});

export default app;