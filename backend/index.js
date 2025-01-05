require('dotenv').config(); // Load environment variables
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes'); // Import your student routes

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));