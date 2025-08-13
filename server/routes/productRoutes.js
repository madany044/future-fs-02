const express = require('express');
const router = express.Router();

module.exports = (Product) => {
  // Add this route to return actual products
  router.get('/', async (req, res) => {
    try {
      const products = await Product.findAll(); // Or your database query
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: 'Database error' });
    }
  });
  return router;
};