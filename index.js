const { Router } = require('express');
const express = require('express');
const app = express();

// Import Routes
const authRoute = require('./routes/playerKillFeed');

// use json parser
app.use(express.json());

// Route middleware
app.use('/api/v1', authRoute);

app.listen(3000, () => console.log('Server Up and runnig!'));