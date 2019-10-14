const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();
const authRoutes = require('./routes/authRoutes');
require('./models/User');
require('./services/passport');
authRoutes(app);

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;
app.listen(PORT);