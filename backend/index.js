require('dotenv').config(); // Load environment variables
const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.status(200).send('Server is running!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));