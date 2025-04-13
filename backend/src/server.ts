import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import visitorRoutes from './routes/visitorRoutes';
import authRouter from './routes/authRouter';
import connectDB from './connection/db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const allowedOrigins = [
  'http://localhost:5173',
  'https://www.arbinniroula.com.np'
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

// Connect to DB
connectDB().catch(err => {
  console.error('Database connection failed', err);
  process.exit(1);
});

// API Routes
app.use('/api/auth', authRouter);
app.use('/api', visitorRoutes);

// Health Check
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Graceful handler for root route
app.get('/', (req, res) => {
  res.send('Welcome to the API. No frontend is served here.');
});

// Prevent 404 logs for favicon
app.get('/favicon.ico', (req, res) => res.sendStatus(204));
app.get('/favicon.png', (req, res) => res.sendStatus(204));

// 404 fallback for other undefined routes
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Endpoint not found'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
