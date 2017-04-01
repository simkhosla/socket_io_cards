var app; //these have to be global so i can reference them in the HTML onClicks for card (don't make them not global)
var io       = require('socket.io-client');
var socket   = io.connect();

//this is used FOR ALL CARDS CAUSE I AM A COMPONENT GOD
Vue.component('card', {
  props: [
    'cardText',
    'btnText',
    'btnAction',
    'btnData'
    ],
  template: '<div class="card"><div class="card-text">{{cardText}}</div><button class="card-btn" @click="btnClicked">{{cardText}}</button></div>',
  methods: {
    btnClicked: function() {
      console.log(this.btnAction);
      if (this.btnAction == 'chooseGame'){


       // whats going on here?
        console.log(this.btnAction, ' this is something')

        // button data is now the name of the chat room thats all I need to make the room
        console.log(this.btnData, ' this is button data')
        this.chooseGame(this.btnData);
      }
      else  {
        this.test2;
      }
    },
    chooseGame: function(gameRoom) {
      console.log('choseGameFiring');
      // this is now the name of the room
      console.log(gameRoom, ' this is data')
      app.chooseGame(gameRoom);
    },
    test2: function() {
      console.log('second test firing');
    }
  }
});


app = new Vue({
  data: {
    test: 'this is a test',
    screen: 'login',
    username: null,
    chosenGame: null,
    newGameName: null,
    availableGames: [],
    showAddGameForm: false,
    newGameObj: null,
    // availableDecks: [] // for later if we want it
  },
  created: function(){
    var self = this;
    socket.on('rooms', function(gameRoom){
      self.availableGames = gameRoom;
    });
  },
  methods: {
    //login methods //
    setClient: function() {
      console.log(this.username)
      // this activates when you click LOGIN in the front on the form
      //whatever you need her to set the person into a socket session or whatever
      //the setting of this.username is handled by v-model in the front -- it is dope
      socket.emit('username', this.username)
      //after all the logic
      // this.getActiveGames(); //this makes the call to pull games for the game view
      this.screen = 'pickGame'; //swaps it to the pick a game view

    },
    showGameForm: function()
    {
      if (this.showAddGameForm === false)
        this.showAddGameForm = true; // this is toggled with view class stuff.
      else
        this.showAddGameForm = false;
    },
    createGame: function() {
      // some sort of ajax or whatever method we need to create game //
      // adding some stub that then updates with the game you created //
      // add it on return to the possibleGames array basically pops it into the available list //
      console.log('create Game firing');

      var tempNewGame = {
        'name': this.newGameName,
        'creator': this.username,
        'numberOfPlayers': 1,
        'deck' : 'default'
      };
      // when they create a room, are they automatically moved to game view,
      // Thats what I'm assuming
      //===========================================================
      socket.emit('createRoom', tempNewGame)
      this.newGameObj = tempNewGame;


      // this.availableGames.unshift(tempNewGame); // this should be done on a return after creation -- if you wanna just reload it too we can do that. not sure what works best on your end.
    },
    chooseGame: function(gameRoom) {
      // ' this is now the name of the room'

      socket.emit('join-room', gameRoom)
      console.log('app.chooseGame firing', gameRoom);
    }

  }
}).$mount('#app');


