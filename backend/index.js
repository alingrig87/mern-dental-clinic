import express from 'express';

// Create an instance of the Express application
const app = express();

// Define a route for the root URL and send a response
app.get('/', (request, response) => response.send('My first response'));

// Specify the port number the server will listen on
const PORT = 5500;

// Start the server and display a message when it's running
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
