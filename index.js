// Import JSON Server
const jsonServer = require('json-server');

// Create server
const server = jsonServer.create();

// Create router
const router = jsonServer.router('db.json');

// Create middleware
const middleware = jsonServer.defaults();

// Set port number
// const port = 3000;

// Use middleware
server.use(middleware);

// Use router
server.use(router);

// Start server
server.listen(port, () => {
    console.log(`JSON Server listening on port ${port}`);
});