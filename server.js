const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const server = express(), DIST_DIR = __dirname, CONTACT_FILE = path.join(DIST_DIR, 'dist/contact.html');
const port = 9090;




//SERVER
server.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.use(express.static(__dirname + '/dist'));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json())

// MAIN PAGE
server.get('/contact', (req, res) => {
    res.sendFile(CONTACT_FILE)
});

server.post('/contact', (req, res) => {
console.log(req.body);
    res.end('SUCESSSSSS')
});