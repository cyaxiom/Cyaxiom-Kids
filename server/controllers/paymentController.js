const PaymentModel = require('../models/paymentModel');

const PaymentController = {
  // Create a new payment
  createPayment: async (req, res) => {
    try {
      const { child_id, stripe_payment_id, amount, currency, status = 'pending' } = req.body;

      // Validate required fields
      if (!child_id || !stripe_payment_id || !amount) {
        return res.status(400).json({ message: 'Missing required payment fields' });
      }

      // Validate status value (ensure it is within allowed options)
      const validStatuses = ['pending', 'completed', 'failed', 'refunded', 'cancelled'];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: `Invalid status. Allowed values are: ${validStatuses.join(', ')}` });
      }

      const payment = await PaymentModel.create({
        child_id,
        stripe_payment_id,
        amount,
        currency,
        status
      });

      res.status(201).json({
        message: 'Payment recorded successfully',
        payment
      });
    } catch (error) {
      console.error('Payment creation error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Get all payments
  getPayments: async (req, res) => {
    try {
      const payments = await PaymentModel.getAll();
      res.status(200).json({ payments });
    } catch (error) {
      console.error('Get Payments error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

 
    // Update payment status (and other fields)
    updatePayment: async (req, res) => {
      try {
        const { paymentId } = req.params;  // Payment ID from URL params
        const { status, amount, currency } = req.body;  // Fields to be updated
  
        // Validate if the paymentId exists and at least one field is provided
        if (!paymentId) {
          return res.status(400).json({ message: 'Payment ID is required' });
        }
  
        if (!status && !amount && !currency) {
          return res.status(400).json({ message: 'At least one field (status, amount, or currency) must be provided to update' });
        }
  
        // Validate status value (ensure it is within allowed options)
        const validStatuses = ['succeeded', 'pending', 'failed', 'canceled', 'refunded'];
        if (status && !validStatuses.includes(status)) {
          return res.status(400).json({ message: `Invalid status. Allowed values are: ${validStatuses.join(', ')}` });
        }
  
        // Update the payment in the database
        const payment = await PaymentModel.update(paymentId, { status, amount, currency });
  
        if (!payment) {
          return res.status(404).json({ message: 'Payment not found' });
        }
  
        res.status(200).json({
          message: 'Payment updated successfully',
          payment
        });
      } catch (error) {
        console.error('Update Payment error:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  
  
};

module.exports = PaymentController;
