import express from 'express'; // Import the Express framework
import ServiceModel from '../models/service.js'; // Import the ServiceModel from the specified path
import { check, validationResult } from 'express-validator'; // Import express-validator for input validation
import bodyParser from 'body-parser'; // Import bodyParser for handling JSON data

const router = express.Router(); // Create an instance of the Express Router

const jsonParser = bodyParser.json(); // Create JSON parser middleware

// Handle GET request to retrieve services
router.get('/', async (request, response) => {
	try {
		const services = await ServiceModel.find(); // Retrieve services from the ServiceModel
		response.status(200).json(services); // Send the retrieved services as JSON response
	} catch (error) {
		console.error(error);
		response.status(500).send('Server error');
	}
});

// Handle POST request to create a new service
router.post(
	'/',
	[
		// Validation checks for input data
		check('service', 'Service is required').not().isEmpty(),
		check('name', 'Name is required').not().isEmpty(),
		check('price', 'Price is required').not().isEmpty(),
	],
	jsonParser,
	async (request, response) => {
		const { name, category, price } = request.body; // Destructure data from the request body

		try {
			let service = await ServiceModel.findOne({
				name,
				category,
				price,
			});

			if (service) {
				return response.status(400).json({ error: 'Service already defined' }); // Respond with an error if the service already exists
			}

			service = new ServiceModel({
				name,
				category,
				price,
			});

			service.save(); // Save the new service to the database
			response.status(201).send(service); // Send the saved service as a response
		} catch (error) {
			console.error(error);
			response.status(500).send('Server error');
		}
	}
);

export default router; // Export the router for use in other parts of the application
