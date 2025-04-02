import express from 'express';
import cors from 'cors';
import authRouter from './routes';
import connectDB from './connection/db';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

// Routes
app.use('/api/auth', authRouter);


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection failed', err);
    process.exit(1);
  });

export default app;