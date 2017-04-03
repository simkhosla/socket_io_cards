var express    = require('express'),
    app        = express(),
    server     = require('http').createServer(app),
    io         = require('socket.io').listen(server),
    router     = express.Router(),
    bodyParser = require('body-parser'),
    cors       = require('cors'),
    path       = require('path'),
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


// Socket Server Code

var onlineClients = {},
    usernames     = {},
    numOfGames    = 1,
    rooms         = [{
          'name': 'Test Game 1',
          'numberOfPlayers': 0,
          'creator': 'Marvin Gaye',
          'deck': 'default'
    }];

io.use(sharedsession(session, {
  autoSave: true
}));

io.sockets.on('connect', function(socket){
  console.log('sockets running')

  socket.emit('rooms', rooms)

  socket.on('createRoom', function(room){
    numOfGames++
    console.log('this is hitting, create room')
    // room['name']+= "#" + numOfGames
    //suggest just slapping number of games as an id cause it looks super weird with it being on the names
    //if the id is unique doesn't matter that the name isn't right?
    //use that to connect instead
    // room['id']
    rooms.unshift(room)
    socket.join('room_' + room['name'])

    console.log(io.nsps['/'].adapter.rooms, 'this is adapter/ rooms')
    io.sockets.emit('rooms', rooms)
  });

  socket.on('join-room', function(roomName){
    console.log(roomName)
    rooms.forEach(function(room, i, rooms){
      console.log(room)

      if(rooms[i]['name'] = roomName){

          if (room['numberOfPlayers'] <= 3){
              console.log(room['numberOfPlayers'])
               rooms[i]['numberOfPlayers']+= 1
               socket.join('room_' + roomName)
               console.log(io.nsps['/'].adapter.rooms, 'this is adapter/ rooms')

              io.sockets.emit('rooms', rooms);
              return;
          }
          else{
            // emit room is full
          }
      }// end of big if

    })

  })

})// end socket code







server.listen(3000, function(){
  console.log('Server is listening on port 3000')
})
