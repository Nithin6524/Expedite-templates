# Express MongoDB API Template

A modular Express.js API template with optional MongoDB integration.

## Features

- ES Modules syntax
- Modular architecture (routes, controllers, services, models)
- Ready-to-use MongoDB connection setup 
- Environment variable configuration
- CORS enabled
- Request logging with Morgan
- Error handling

## Directory Structure

```
├── config/             # Configuration files
├── controllers/        # Request handlers
├── models/             # Mongoose models
├── routes/             # API routes
├── services/           # Business logic
├── .env.example        # Environment variables example
├── package.json        # Dependencies and scripts
├── server.js           # Application entry point
```

## Getting Started

1. Clone this template
2. Create a `.env` file based on `.env.example`
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## API Endpoints

- `GET /` - Welcome message
- `GET /api` - Basic API endpoint

## Enabling MongoDB Connection



1. Update your `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://your-connection-string
   ```

2. Uncomment the database connection line in `server.js`:
   ```javascript
   // Connect to MongoDB
   connectDB();
   ```

## Adding New Features

1. Create a model in the `models/` directory
2. Add business logic in the `services/` directory
3. Create controller functions in the `controllers/` directory
4. Define routes in the `routes/` directory
5. Register new route modules in `routes/index.js`
