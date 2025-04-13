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

if (!allowedOrigins) {
  console.error("CORS Error: Allowed origins are not defined!");
}

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));


connectDB().catch(err => {
  console.error('Database connection failed', err);
  process.exit(1);
});

// Routes
app.use('/api/auth', authRouter);
app.use('/api', visitorRoutes);

app.get('/ping', (req, res) => {
  res.send('pong');
});




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
