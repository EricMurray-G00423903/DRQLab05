// Express server settings
const express = require('express');
const app = express();
const port = 3000;

//Get req on the main page
app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying'); //send this return to the page
});

//Listener to log server to port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');  //500 error returns Something Went Wrong
});

//Added route for hello
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});

app.get('/hello/:name/:second', (req, res) => {
    const name = req.params.name;
    const second = req.params.second;
    res.send(`Hello ${name} ${second}`);
});