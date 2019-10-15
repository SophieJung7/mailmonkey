const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// **** Enabling Cookies **** // 
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // Cookie lasts for 30 days
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

// **** Routes **** // 
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);