const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController'); // Importing the controller

// Define the routes for payment operations
router.post('/create-payment', paymentController.createPayment);  // Create payment
router.get('/get-all-payments', paymentController.getPayments);    // Get all payments
router.put('/update-payment/:paymentId', paymentController.updatePayment);  // Update payment by ID

module.exports = router;  // Exporting the router for use in app.js
