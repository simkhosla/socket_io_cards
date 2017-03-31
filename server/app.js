var express    = require('express'),
    app        = express(),
    server     = require('http').createServer(app),
    io         = require('socket.io').listen(server),
    router     = express.Router(),
    bodyParser = require('body-parser'),
    cors       = require('cors'),
    path       = require('path'),
    bcrypt     = require('bcrypt'),
    session    = require("express-session")({
                      secret: "my-secret",
                      resave: true,
                      saveUninitialized: true
                   }),
  sharedsession = require("express-socket.io-session");


app.use(session);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


// Requiring Database
require('./db/db')

var HomeController = require('./controllers/HomeController')


app.use('/', HomeController)



server.listen(3000, function(){
  console.log('Server is listening on port 3000')
})
