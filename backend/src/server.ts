const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
import authRouter from './routes';
import connectDB from './connection/db';
import vistorRoutes from './routes/visitorRoutes';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cors({
  origin: process.env.URL, 
  credentials: true
}));

// Routes
app.use('/api/auth', authRouter);
app.use('/api',vistorRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost/${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection failed', err);
    process.exit(1);
  });

export default app;