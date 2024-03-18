const express = require('express'); // Import the express module
const app = express(); // Create an instance of an Express app
const port = 3000; // port number
const path = require('path'); // Import the path module

// Define a route handler for GET requests to the root URL ("/")
app.get('/', (req, res) => {
  // Send the 'index.html' file in response to requests to the root URL
  res.sendFile(path.join(__dirname, 'index.html'));
});


// Listen on the specified port and log a message once the server is running
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
