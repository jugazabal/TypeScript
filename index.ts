import express from 'express';

const app = express();

// Root endpoint
app.get('/', (_req, res) => {
  res.json({
    message: 'Hello TypeScript Express Server!',
    endpoints: {
      '/': 'This welcome message',
      '/ping': 'Health check endpoint'
    }
  });
});

// Health check endpoint
app.get('/ping', (_req, res) => {
  res.send('pong');
});

// 404 handler for undefined routes
app.use((_req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: 'The requested endpoint does not exist'
  });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to see the welcome message`);
  console.log(`Visit http://localhost:${PORT}/ping for health check`);
});