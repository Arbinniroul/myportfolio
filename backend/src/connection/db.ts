// connection/db.ts
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!, {
      serverSelectionTimeoutMS: 5000 
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
};

export default connectDB;