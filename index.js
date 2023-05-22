const express = require('express');
const connectWithDb = require('./config/db');
require('dotenv').config();
const app = express();
const { PORT } = process.env;

// Import Swagger dependencies for API documentation
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Connect with the database
connectWithDb();

// Regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Express router for handling routes
app.use('/', require('./routes'));

// Start the server
app.listen(PORT || 5000, (err) => {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is up and running at port ${PORT}`);
});
