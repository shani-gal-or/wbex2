const mongoose = require('mongoose');

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    
    if (res) {
      res.status(200).json({ message: 'Connected to MongoDB' });
    }
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);

    if (res) {
      res.status(500).json({ error: 'Failed to connect to MongoDB', details: err.message });
    }

    process.exit(1); 
  }
};

module.exports = connectDB;
