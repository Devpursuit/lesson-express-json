const express = require('express');
const app = express();

// Built-in middleware
app.use(express.json());

// TODO: Add POST route for /api/data
// TODO: Add custom logging middleware

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
