// Import necessary modules
const express = require('express');
require('dotenv').config(); // Load environment variables

const app = express(); // Initialize Express app

// Define the root route
app.get('/', (req, res) => {
  const isAdmin = process.env.IS_ADMIN === 'true'; // Check environment variable
  if (isAdmin) {
    res.send({
      message: "Welcome, Admin!",
      data: ["Admin Data 1", "Admin Data 2"],
    });
  } else {
    res.send({
      message: "Welcome, User!",
      data: ["User Data 1", "User Data 2"],
    });
  }
});

// Start the server
app.listen(3000, () => console.log("Server is running on port 3000."));
