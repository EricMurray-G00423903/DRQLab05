// Express server settings
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));  //USE HTML JS CSS Files from PUBLIC dir

//Get req on the main page
app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying'); //send this return to the page
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

//Added second route for second name
app.get('/hello/:name/:second', (req, res) => {
    const name = req.params.name;
    const second = req.params.second;
    res.send(`Hello ${name} ${second}`);
});

const path = require('path');

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.json({ movies });
    res.status(201).json({ movies });
});

//Listener to log server to port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});