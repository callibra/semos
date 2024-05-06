import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', 'config', 'config.env') });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

export const init = async () => {
  try {
    await mongoose.connect(DB);
    console.log('Successfully connected to MongoDB database');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
  }
};
