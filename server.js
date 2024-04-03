// const express = require('express');
// const axios = require('axios');
// const bodyParser = require('body-parser');

// const app = express(); // Initialize the app variable first
// const PORT = process.env.PORT || 3000;

// app.use(express.static('public')); // Set up static file serving middleware
// app.use(bodyParser.json()); // Use bodyParser middleware to parse JSON request bodies

// // Define your route after initializing the app variable
// app.post('/submit-form', async (req, res) => {
//   try {
//     const response = await axios.post('https://script.google.com/macros/s/AKfycbyz5f4t6aRP_s9D-3tgh7iLfoM083255oQIRM8L0TuNLubrJ9zKcjKpXhx2Yudy7AWC/exec', req.body);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
