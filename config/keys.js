// keys.js - figure out what set of credentials to return. 

if (process.env.NODE_ENV === 'production') {
    // We are in production - return the production keys.
    module.exports = require('./prod');
} else {
    // we are in development = return the development keys. 
    module.exports = require('./dev');
}