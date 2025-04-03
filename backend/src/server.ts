import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './routes';
import connectDB from './connection/db';
import vistorRoutes from './routes/visitorRoutes';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: process.env.URL, 
  credentials: true
}));

app.use('/',()=>{
  console.log("API is running...");  // This will print when server is running.

})
app.use('/api/auth', authRouter);
app.use('/api', vistorRoutes);

// Database connection and server start
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