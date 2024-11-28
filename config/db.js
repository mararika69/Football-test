const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Simplified connection
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit on failure
  }
};

module.exports = connectDB;

