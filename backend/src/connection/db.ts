import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI not defined in environment variables');
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, 
      socketTimeoutMS: 45000, 
    });

    console.log(`MongoDB Connected`);
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;