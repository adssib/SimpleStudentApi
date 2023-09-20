const express = require('express');
const app = express();
const jsonServer = require('json-server');
const port = 3000;

// Middleware to handle CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Use json-server to create a mock API from your JSON file
app.use('/api', jsonServer.router('data.json'));

app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
