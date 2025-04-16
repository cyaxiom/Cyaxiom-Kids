const db = require('../config/database');

const PaymentModel = {
  // Create a new payment record
  create: async (data) => {
    const { child_id, stripe_payment_id, amount, currency, status } = data;

    // Insert the payment record into the database
    const [result] = await db.execute(
      `INSERT INTO payments (child_id, stripe_payment_id, amount, currency, status)
       VALUES (?, ?, ?, ?, ?)`,
      [child_id, stripe_payment_id, amount, currency || 'USD', status || 'pending']
    );

    return { payment_id: result.insertId, ...data };
  },

  // Get all payments
  getAll: async () => {
    const [rows] = await db.execute('SELECT * FROM payments');
    return rows;
  },

  // Get a payment by its ID
  getById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM payments WHERE payment_id = ?', [id]);
    return rows[0];
  },

  // Update payment status (and other fields)
  update: async (paymentId, data) => {
    const { status, amount, currency } = data;

    // Update query
    const [result] = await db.execute(
      `UPDATE payments SET status = ?, amount = ?, currency = ? WHERE payment_id = ?`,
      [status || 'pending', amount, currency || 'USD', paymentId]
    );

    // Return updated payment object
    return result.affectedRows > 0 ? { payment_id: paymentId, ...data } : null;
  }
};

module.exports = PaymentModel;
