import express from 'express'; // Import the Express framework
import { connectToDB } from './config/mongoConnection.js'; // Import the connectToDB function from the specified path
import serviceRouter from './api/service.js'; // Import the service router from the specified path
import appointmentRouter from './api/appointment.js'; // Import the appointment router from the specified path

const app = express(); // Create an instance of the Express application

connectToDB(); // Call the connectToDB function to establish a connection to the MongoDB database

app.use('/api/services', serviceRouter); // Use the service router for handling '/api/services' routes
app.use('/api/appointments', appointmentRouter); // Use the appointment router for handling '/api/appointments' routes

const PORT = process.env.PORT || 5500; // Specify the port number the server will listen on, using either the environment variable or a default value

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // Start the server and display a message when it's running
