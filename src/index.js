const express = require('express');
const routes = require('./routes');

// Config
const port = process.env.PORT || 8080;

// Initializations
const expressServer = express();

// Default routes
expressServer.use('/api', routes);
expressServer.use((err, req, res, next) => {
    res.status(err.status || 400).json({
        success: false,
        message: err.message || 'An error occured.',
        errors: err.error || [],
    });
});
expressServer.use((req, res) => {
    res.status(404).json({ success: false, message: 'Resource not found.' });
});

// Start
expressServer.listen(port);
console.log(`Server started on port ${port}`);
