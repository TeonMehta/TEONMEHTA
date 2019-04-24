const path =        require("path");
const express =     require("express");
const bodyParser =  require("body-parser");
const ejs =         require('ejs');

const server = express(), DIST_DIR = __dirname,
    CONTACT = path.join(DIST_DIR, 'dist/contact.html'),
    HOME = path.join(DIST_DIR, 'dist/index.html'),
    ABOUT = path.join(DIST_DIR, 'dist/about.html'),
    WORK = path.join(DIST_DIR, 'dist/work.html'),
    TEXT = path.join(DIST_DIR, 'dist/text.ejs'),
    NEWSMARTCONTACT  = path.join(DIST_DIR, 'dist/new-contact.ejs');

const port = 80;




//SERVER
server.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.use(express.static(__dirname + '/dist'));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.set('view engine', 'ejs');
var contacts =
    [
        {
            name: 'Teon',
            instagram: 'Teon',
            facebook: 'Teon',
            twitter: 'Teon'
        },
        {
            name: 'Kyle',
            instagram: 'Kyle',
            facebook: 'Kyle',
            twitter: 'Kyle'
        },
        {
            name: 'Elon',
            instagram: 'Elon',
            facebook: 'Elon',
            twitter: 'Elon'
        }
    ];
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

// TEXT PAGE
server.get('/contacts', (req, res) => {
    SmartContact.find({},function (err, allsmartcontacts) {
        if(err){
            alert(err);
        }
        else{
            res.render(TEXT, {smartcontacts:allsmartcontacts})
        }
    });


});
server.get('/contacts/new', (req, res) => {
   res.render(NEWSMARTCONTACT)
});

server.post('/contacts', (req,res) =>{
    var name = req.body.name;
    var instagram = req.body.instagram;
    var twitter = req.body.twitter;
    var facebook = req.body.facebook;
    var newContact = {
        name:name,
        instagram:instagram,
        twitter:twitter,
        facebook:facebook
    };
    // CREATE NEW SMART CONTACT
    SmartContact.create(newContact, function (err, newlyCreated) {
        if (err) {
            alert(err)
        }
        else {
            res.redirect("/contacts");
        }
    });


});

// DATABASE SET UP

var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://teonmehta:Tehann11!@teonardo-cok9l.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// SMART CONTACT SET UP
var Schema = mongoose.Schema;
var SmartContactSchema = new mongoose.Schema({
    name: String,
    instagram: String,
    facebook: String,
    twitter: String
});
var SmartContact = mongoose.model('SmartContact', SmartContactSchema);

// var Jigga = new SmartContact({
//
// });

// SmartContact.create({
//     name:'Kanye',
//     instagram: 'yeezy',
//     twitter:'yeezy',
//     facebook:'kanye_west'
//     },function (err, smartcontact) {
//         if (err){
//             console.log(err)
//         }
//         else {
//             console.log(" Smart Contact was saved", smartcontact)
//         }
// });




