import express from 'express';

const router = express.Router();

// Basic test endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'API is working correctly',
    timestamp: new Date(),
    environment: process.env.NODE_ENV || 'development'
  });
});

export default router;