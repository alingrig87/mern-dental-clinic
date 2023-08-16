import mongoose from 'mongoose'; // Import the Mongoose library for MongoDB interactions

// Define a schema for the 'appointment' collection
const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	issue: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
});

// Create a 'mongoose' model named 'appointment' based on the defined schema
const appointment = mongoose.model('appointment', schema);

export default appointment; // Export the 'appointment' model for use in other parts of the application
