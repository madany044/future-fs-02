require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// TEST ROUTE (NO DATABASE)
app.get('/api/products', (req, res) => {
  res.json([{ id: 1, name: "FORCED TEST PRODUCT", price: 100 }]);
});

// Start server
const PORT = process.env.PORT || 3005;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Backend FORCE-STARTED on http://localhost:${PORT}`);
});