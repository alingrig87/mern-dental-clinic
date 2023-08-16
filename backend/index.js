import express from 'express'; // Import the Express framework
import { connectToDB } from './config/mongoConnection.js'; // Import the connectToDB function from the specified path
import serviceRouter from './api/service.js'; // Import the service router from the specified path
import appointmentRouter from './api/appointment.js'; // Import the appointment router from the specified path
import path from 'path'; // Import the 'path' module for working with file and directory paths
import cors from 'cors'; // Import the 'cors' module for enabling Cross-Origin Resource Sharing (CORS)
import config from 'config'; // Import the 'config' module for configuration management

const app = express(); // Create an instance of the Express application

connectToDB(); // Call the connectToDB function to establish a connection to the MongoDB database

app.use(cors());
const options = {
	origin: ['http://127.0.0.1:5173', config.get('apiURL')], // Set the allowed origins for CORS, including the configured API URL
};
app.use(cors(options)); // Use CORS middleware with the specified options

app.use('/api/services', serviceRouter); // Use the service router for handling '/api/services' routes
app.use('/api/appointments', appointmentRouter); // Use the appointment router for handling '/api/appointments' routes

// Serve static files and handle routes for a Single Page Application (SPA) in production mode.
if (process.env.NODE_ENV == 'production') {
	const __dirname = path.resolve(); // Get the current directory's path

	// Serve static files from the specified directory (frontend build output)
	app.use(express.static(path.join(__dirname, '../frontend/dist')));

	// Handle unmatched routes by serving the index.html file
	app.get('*', (req, res) =>
		res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
	);
}

const PORT = process.env.PORT || 5500; // Specify the port number the server will listen on, using either the environment variable or a default value

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // Start the server and display a message when it's running
