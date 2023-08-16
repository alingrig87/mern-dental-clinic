import express from 'express'; // Import the Express framework
import AppointmentModel from '../models/appointment.js'; // Import the AppointmentModel from the specified path
import { check, validationResult } from 'express-validator'; // Import express-validator for input validation
import bodyParser from 'body-parser'; // Import bodyParser for handling JSON data

const router = express.Router(); // Create an instance of the Express Router

const jsonParser = bodyParser.json(); // Create JSON parser middleware

// Handle GET request to retrieve appointments
router.get('/', async (request, response) => {
	try {
		const appointments = await AppointmentModel.find(); // Retrieve appointments from the AppointmentModel
		response.status(200).json(appointments); // Send the retrieved appointments as JSON response
	} catch (error) {
		console.error(error);
		response.status(500).send('Server error');
	}
});

// Handle POST request to create a new appointment
router.post(
	'/',
	[
		// Validation checks for input data
		check('name', 'Name is required').not().isEmpty(),
		check('issue', 'Issue is required').not().isEmpty(),
		check('price', 'Price is required').not().isEmpty(),
		check('phone', 'Phone number is required').not().isEmpty(),
	],
	jsonParser,
	async (request, response) => {
		const { name, issue, date, phone } = request.body; // Destructure data from the request body

		try {
			let appointment = await AppointmentModel.findOne({
				name,
				issue,
				date,
				phone,
			});

			if (appointment) {
				return response
					.status(400)
					.json({ error: 'Appointment already defined' }); // Respond with an error if the appointment already exists
			}

			appointment = new AppointmentModel({
				name,
				issue,
				date,
				phone,
			});

			appointment.save(); // Save the new appointment to the database
			response.status(201).send(appointment); // Send the saved appointment as a response
		} catch (error) {
			console.error(error);
			response.status(500).send('Server error');
		}
	}
);

export default router; // Export the router for use in other parts of the application
