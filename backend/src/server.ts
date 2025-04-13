import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import visitorRoutes from './routes/visitorRoutes';
import authRouter from './routes/authRouter';
import connectDB from './connection/db';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
const allowedOrigin = process.env.URL?.trim(); 

if (!allowedOrigin) {
  console.error("CORS Error: 'process.env.URL' is not defined!");
}

app.use(cors({
  origin: allowedOrigin,
  credentials: true
}));

// Database connection
connectDB().catch(err => {
  console.error('Database connection failed', err);
  process.exit(1);
});


app.use('/api/auth',authRouter); 
app.use('/api', visitorRoutes);  


app.get('/ping', (req, res) => {
  res.send('pong');
});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
  });
}


app.use((req, res) => {
  res.status(404).json({ 
    status: 'error',
    message: 'Endpoint not found' 
  });
});


if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;