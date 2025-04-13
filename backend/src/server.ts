import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './routes';
import connectDB from './connection/db';
import vistorRoutes from './routes/visitorRoutes';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cors({
  origin: process.env.URL , 
  credentials: true
}));


app.use('/api/auth', authRouter);
app.use('/api', vistorRoutes);

app.get('/ping', (req, res) => {
  res.send('pong');
});


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


if (process.env.NODE_ENV !== 'production') {
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
}

// Export for Vercel
export default app;