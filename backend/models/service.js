import mongoose from 'mongoose'; // Import the Mongoose library for MongoDB interactions

// Define a schema for the 'service' collection
const schema = new mongoose.Schema({
	category: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

// Create a 'mongoose' model named 'service' based on the defined schema
const service = mongoose.model('service', schema);

export default service; // Export the 'service' model for use in other parts of the application
