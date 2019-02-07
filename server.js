const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const server = express(), DIST_DIR = __dirname,
    CONTACT = path.join(DIST_DIR, 'dist/contact.html'),
    HOME = path.join(DIST_DIR, 'dist/index.html'),
    ABOUT = path.join(DIST_DIR, 'dist/about.html'),
    WORK = path.join(DIST_DIR, 'dist/work.html');

const port = 80;




//SERVER
server.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.use(express.static(__dirname + '/dist'));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// MAIN PAGE
server.get('/', (req, res) => {
    res.sendFile(HOME)
});

// WORK PAGE
server.get('/work', (req, res) => {
    res.sendFile(WORK)
});
// ABOUT PAGE
server.get('/about', (req, res) => {
    res.sendFile(ABOUT)
});


// CONTACT PAGE
server.get('/contact', (req, res) => {
    res.sendFile(CONTACT)
});

server.post('/contact', (req, res) => {
console.log(req.body);
    res.end('SUCESSSSSS')
});