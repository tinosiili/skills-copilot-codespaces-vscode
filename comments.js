// Create web server
// Install express
const express = require('express');
const app = express();

// Install body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create comments array
const comments = [];

// Create a route that returns the comments array
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route that adds a comment to the comments array
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});