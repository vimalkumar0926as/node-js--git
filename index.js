// Import the express module
const express = require('express');
const app = express();

// Define the port number
const PORT = 3000;

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    res.send('Hello World! Your simple Node.js application is running.');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

