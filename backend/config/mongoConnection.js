import mongoose from 'mongoose'; // Import the Mongoose library for MongoDB interactions
import config from 'config'; // Import the 'config' module for configuration management

// Get the MongoDB connection URL from either the environment variable or the 'config' module
const mongoURL = process.env.mongoURL || config.get('mongoURL');

// Define a function to connect to the MongoDB database
export const connectToDB = async () => {
	try {
		// Connect to the MongoDB database using the specified URL
		await mongoose.connect(mongoURL);
		console.log('Connection to MongoDB successful!'); // Log success message if connection is established
	} catch (error) {
		console.log(error); // Log any errors that occur during the connection attempt
	}
};
