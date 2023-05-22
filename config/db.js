const mongoose = require('mongoose');

// Function to connect to the MongoDB database
const connectWithDb = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database connected successfully');
    })
    .catch((error) => {
      console.log('Database connection failed');
      console.error(error);
      process.exit(1);
    });
};

module.exports = connectWithDb;

