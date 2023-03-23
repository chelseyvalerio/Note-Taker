/**
 * start with localhost:3001
 * 
 * npm start
 * 
 * localhost:3001/notes
 * 
 * save button should appear when title AND note is added. lock will not show without either note or title (both are required) part of note text
 * need data persistance (writeFile) (store to local storage after save)
 * 
 * deploy with heroku - github is now replaced by heroku. submit link to heroku github and heroku url deplyment link
 * 
 * 
 * 
 * [PSEUDO CODING]
Use insomnia for testing as you go.. front-end has been provided for us!

1st Task = (Psuedo Code) => {
*The challenge is extremely similar to Mini Project*
app.get('/', (req, res) => {   //you know this is html because it's a single '/' without params - indicating homepage
On browser:
	When you:
	- click 'start' -> ".com/notes"  //html path to notes.js
	- click 'trash' icon -> app.delete()
	- click '+' icon -> app.post()
'/public' link I found very helpful: https://expressjs.com/en/starter/static-files.html
};


2nd Task = (Look @ Starter Code) => {
npm i && node index.js
Structure folders :
 - server.js @ root
 - db
 - helpers
 - routes - include files /index.js & /notes.js  -  (because modularization. Look into Activity 22 for more info)
Server.js (use Boiler Plate below):
 - bring in dependencies
 - configure middleware (must come before api routes)
 - api routes
};


 * 
 * *[BOILER PLATE FOR ALL SERVER FILES:: ]*
// Import Express.js
const express = require('express');

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));

// Create Express.js routes for default '/', '/send' and '/routes' endpoints
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));
app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);
app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

// listen() method is responsible for listening for incoming connections on the specified port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
); (
 */



const express = require('express');
const apiRoutes = require('./Main/routes/apiRoutes');
const htmlRoutes = require('./Main/routes/htmlRoutes');
const path = require('path');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
// app.use = middleware!!!!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));// static middleware
app.use('/api', apiRoutes); // this is the api route
app.use('/', htmlRoutes); //this is the root route


app.get('/', (req, res) => res.send('Navigate to /notes'));
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);
app.post('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: http://localhost:${PORT}`));
