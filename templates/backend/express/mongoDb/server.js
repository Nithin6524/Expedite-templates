import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import { connectDB } from './config/database.js';
import testRoutes from './routes/testRoutes.js';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Connect to MongoDB
// connectDB();

// Routes
app.use('/api', testRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Express MongoDB API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


