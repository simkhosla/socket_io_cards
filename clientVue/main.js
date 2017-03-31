var app; //these have to be global so i can reference them in the HTML onClicks for card (don't make them not global)
//hi
//yo

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
      if (this.btnAction == 'chooseGame')
        this.chooseGame(this.btnData);
      else
        this.test2;
    },
    chooseGame: function(data) {
      console.log('choseGameFiring');
      app.chooseGame(data);
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
  methods: {
    //login methods //
    setClient: function() {
      // this activates when you click LOGIN in the front on the form
      //whatever you need her to set the person into a socket session or whatever
      //the setting of this.username is handled by v-model in the front -- it is dope

      //after all the logic
      this.getActiveGames(); //this makes the call to pull games for the game view
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
        'gameId': 239,
        'numberOfPlayers': 1
      };

      this.newGameObj = tempNewGame;

      this.availableGames.unshift(tempNewGame); // this should be done on a return after creation -- if you wanna just reload it too we can do that. not sure what works best on your end. 
    },
    /// starting game methods ///
    getActiveGames: function() {
      //this is where you plug in ajax or whatever gets all the currently joinable games
      //returning crap for rendering

      var games = [
        {
          'name': 'Test Game 1',
          'numberOfPlayers': 2,
          'creator': 'TestPerson',
          'gameId': 234,
          'deck': 'default'  // i assume it'll be something like this to actually link, adjust however
        },
        {
          'name': 'Test Game 2',
          'numberOfPlayers': 1, 
          'creator': 'AnotherPerson',
          'gameId': 235,
          'deck': 'default'  // i assume it'll be something like this to actually link, adjust however
        },
        {
          'name': 'Test Game 3',
          'numberOfPlayers': 1, 
          'creator': 'Haff',
          'gameId': 238,
          'deck': 'default' // i assume it'll be something like this to actually link, adjust however
        }
      ];

      // ^ this is all stuff that should be coming in through ajax or whatever gets it here.

      this.availableGames = games;
    },

    chooseGame: function(gameId) {
      console.log('app.chooseGame firing', gameId);
    }

  }
}).$mount('#app');


