(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var app; //these have to be global so i can reference them in the HTML onClicks for card (don't make them not global)
//hi
//yo

//this is used FOR ALL CARDS CAUSE I AM A COMPONENT GOD
Vue.component('card', {
  props: ['cardText', 'btnText', 'btnAction', 'btnData'],
  template: '<div class="card"><div class="card-text">{{cardText}}</div><button class="card-btn" @click="btnClicked">{{cardText}}</button></div>',
  methods: {
    btnClicked: function btnClicked() {
      console.log(this.btnAction);
      if (this.btnAction == 'chooseGame') this.chooseGame(this.btnData);else this.test2;
    },
    chooseGame: function chooseGame(data) {
      console.log('choseGameFiring');
      app.chooseGame(data);
    },
    test2: function test2() {
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
    newGameObj: null
  },
  methods: {
    //login methods //
    setClient: function setClient() {
      // this activates when you click LOGIN in the front on the form
      //whatever you need her to set the person into a socket session or whatever
      //the setting of this.username is handled by v-model in the front -- it is dope

      //after all the logic
      this.getActiveGames(); //this makes the call to pull games for the game view
      this.screen = 'pickGame'; //swaps it to the pick a game view
    },
    showGameForm: function showGameForm() {
      if (this.showAddGameForm === false) this.showAddGameForm = true; // this is toggled with view class stuff.
      else this.showAddGameForm = false;
    },
    createGame: function createGame() {
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
    getActiveGames: function getActiveGames() {
      //this is where you plug in ajax or whatever gets all the currently joinable games
      //returning crap for rendering

      var games = [{
        'name': 'Test Game 1',
        'numberOfPlayers': 2,
        'creator': 'TestPerson',
        'gameId': 234,
        'deck': 'default' // i assume it'll be something like this to actually link, adjust however
      }, {
        'name': 'Test Game 2',
        'numberOfPlayers': 1,
        'creator': 'AnotherPerson',
        'gameId': 235,
        'deck': 'default' // i assume it'll be something like this to actually link, adjust however
      }, {
        'name': 'Test Game 3',
        'numberOfPlayers': 1,
        'creator': 'Haff',
        'gameId': 238,
        'deck': 'default' // i assume it'll be something like this to actually link, adjust however
      }];

      // ^ this is all stuff that should be coming in through ajax or whatever gets it here.

      this.availableGames = games;
    },

    chooseGame: function chooseGame(gameId) {
      console.log('app.chooseGame firing', gameId);
    }

  }
}).$mount('#app');

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnRWdWUvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxHQUFKLEMsQ0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLFNBQUosQ0FBYyxNQUFkLEVBQXNCO0FBQ3BCLFNBQU8sQ0FDTCxVQURLLEVBRUwsU0FGSyxFQUdMLFdBSEssRUFJTCxTQUpLLENBRGE7QUFPcEIsWUFBVSxxSUFQVTtBQVFwQixXQUFTO0FBQ1AsZ0JBQVksc0JBQVc7QUFDckIsY0FBUSxHQUFSLENBQVksS0FBSyxTQUFqQjtBQUNBLFVBQUksS0FBSyxTQUFMLElBQWtCLFlBQXRCLEVBQ0UsS0FBSyxVQUFMLENBQWdCLEtBQUssT0FBckIsRUFERixLQUdFLEtBQUssS0FBTDtBQUNILEtBUE07QUFRUCxnQkFBWSxvQkFBUyxJQUFULEVBQWU7QUFDekIsY0FBUSxHQUFSLENBQVksaUJBQVo7QUFDQSxVQUFJLFVBQUosQ0FBZSxJQUFmO0FBQ0QsS0FYTTtBQVlQLFdBQU8saUJBQVc7QUFDaEIsY0FBUSxHQUFSLENBQVksb0JBQVo7QUFDRDtBQWRNO0FBUlcsQ0FBdEI7O0FBMkJBLE1BQU0sSUFBSSxHQUFKLENBQVE7QUFDWixRQUFNO0FBQ0osVUFBTSxnQkFERjtBQUVKLFlBQVEsT0FGSjtBQUdKLGNBQVUsSUFITjtBQUlKLGdCQUFZLElBSlI7QUFLSixpQkFBYSxJQUxUO0FBTUosb0JBQWdCLEVBTlo7QUFPSixxQkFBaUIsS0FQYjtBQVFKLGdCQUFZO0FBUlIsR0FETTtBQVlaLFdBQVM7QUFDUDtBQUNBLGVBQVcscUJBQVc7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBSyxjQUFMLEdBTm9CLENBTUc7QUFDdkIsV0FBSyxNQUFMLEdBQWMsVUFBZCxDQVBvQixDQU9NO0FBRTNCLEtBWE07QUFZUCxrQkFBYyx3QkFDZDtBQUNFLFVBQUksS0FBSyxlQUFMLEtBQXlCLEtBQTdCLEVBQ0UsS0FBSyxlQUFMLEdBQXVCLElBQXZCLENBREYsQ0FDK0I7QUFEL0IsV0FHRSxLQUFLLGVBQUwsR0FBdUIsS0FBdkI7QUFDSCxLQWxCTTtBQW1CUCxnQkFBWSxzQkFBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxjQUFRLEdBQVIsQ0FBWSxvQkFBWjs7QUFFQSxVQUFJLGNBQWM7QUFDaEIsZ0JBQVEsS0FBSyxXQURHO0FBRWhCLG1CQUFXLEtBQUssUUFGQTtBQUdoQixrQkFBVSxHQUhNO0FBSWhCLDJCQUFtQjtBQUpILE9BQWxCOztBQU9BLFdBQUssVUFBTCxHQUFrQixXQUFsQjs7QUFFQSxXQUFLLGNBQUwsQ0FBb0IsT0FBcEIsQ0FBNEIsV0FBNUIsRUFmcUIsQ0FlcUI7QUFDM0MsS0FuQ007QUFvQ1A7QUFDQSxvQkFBZ0IsMEJBQVc7QUFDekI7QUFDQTs7QUFFQSxVQUFJLFFBQVEsQ0FDVjtBQUNFLGdCQUFRLGFBRFY7QUFFRSwyQkFBbUIsQ0FGckI7QUFHRSxtQkFBVyxZQUhiO0FBSUUsa0JBQVUsR0FKWjtBQUtFLGdCQUFRLFNBTFYsQ0FLcUI7QUFMckIsT0FEVSxFQVFWO0FBQ0UsZ0JBQVEsYUFEVjtBQUVFLDJCQUFtQixDQUZyQjtBQUdFLG1CQUFXLGVBSGI7QUFJRSxrQkFBVSxHQUpaO0FBS0UsZ0JBQVEsU0FMVixDQUtxQjtBQUxyQixPQVJVLEVBZVY7QUFDRSxnQkFBUSxhQURWO0FBRUUsMkJBQW1CLENBRnJCO0FBR0UsbUJBQVcsTUFIYjtBQUlFLGtCQUFVLEdBSlo7QUFLRSxnQkFBUSxTQUxWLENBS29CO0FBTHBCLE9BZlUsQ0FBWjs7QUF3QkE7O0FBRUEsV0FBSyxjQUFMLEdBQXNCLEtBQXRCO0FBQ0QsS0FwRU07O0FBc0VQLGdCQUFZLG9CQUFTLE1BQVQsRUFBaUI7QUFDM0IsY0FBUSxHQUFSLENBQVksdUJBQVosRUFBcUMsTUFBckM7QUFDRDs7QUF4RU07QUFaRyxDQUFSLEVBdUZILE1BdkZHLENBdUZJLE1BdkZKLENBQU4iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGFwcDsgLy90aGVzZSBoYXZlIHRvIGJlIGdsb2JhbCBzbyBpIGNhbiByZWZlcmVuY2UgdGhlbSBpbiB0aGUgSFRNTCBvbkNsaWNrcyBmb3IgY2FyZCAoZG9uJ3QgbWFrZSB0aGVtIG5vdCBnbG9iYWwpXG4vL2hpXG4vL3lvXG5cbi8vdGhpcyBpcyB1c2VkIEZPUiBBTEwgQ0FSRFMgQ0FVU0UgSSBBTSBBIENPTVBPTkVOVCBHT0RcblZ1ZS5jb21wb25lbnQoJ2NhcmQnLCB7XG4gIHByb3BzOiBbXG4gICAgJ2NhcmRUZXh0JywgXG4gICAgJ2J0blRleHQnLCBcbiAgICAnYnRuQWN0aW9uJyxcbiAgICAnYnRuRGF0YSdcbiAgICBdLFxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJjYXJkXCI+PGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPnt7Y2FyZFRleHR9fTwvZGl2PjxidXR0b24gY2xhc3M9XCJjYXJkLWJ0blwiIEBjbGljaz1cImJ0bkNsaWNrZWRcIj57e2NhcmRUZXh0fX08L2J1dHRvbj48L2Rpdj4nLFxuICBtZXRob2RzOiB7XG4gICAgYnRuQ2xpY2tlZDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmJ0bkFjdGlvbik7XG4gICAgICBpZiAodGhpcy5idG5BY3Rpb24gPT0gJ2Nob29zZUdhbWUnKVxuICAgICAgICB0aGlzLmNob29zZUdhbWUodGhpcy5idG5EYXRhKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy50ZXN0MjtcbiAgICB9LFxuICAgIGNob29zZUdhbWU6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjaG9zZUdhbWVGaXJpbmcnKTtcbiAgICAgIGFwcC5jaG9vc2VHYW1lKGRhdGEpO1xuICAgIH0sIFxuICAgIHRlc3QyOiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzZWNvbmQgdGVzdCBmaXJpbmcnKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cbmFwcCA9IG5ldyBWdWUoe1xuICBkYXRhOiB7XG4gICAgdGVzdDogJ3RoaXMgaXMgYSB0ZXN0JyxcbiAgICBzY3JlZW46ICdsb2dpbicsXG4gICAgdXNlcm5hbWU6IG51bGwsXG4gICAgY2hvc2VuR2FtZTogbnVsbCxcbiAgICBuZXdHYW1lTmFtZTogbnVsbCxcbiAgICBhdmFpbGFibGVHYW1lczogW10sXG4gICAgc2hvd0FkZEdhbWVGb3JtOiBmYWxzZSxcbiAgICBuZXdHYW1lT2JqOiBudWxsLFxuICAgIC8vIGF2YWlsYWJsZURlY2tzOiBbXSAvLyBmb3IgbGF0ZXIgaWYgd2Ugd2FudCBpdFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLy9sb2dpbiBtZXRob2RzIC8vXG4gICAgc2V0Q2xpZW50OiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIHRoaXMgYWN0aXZhdGVzIHdoZW4geW91IGNsaWNrIExPR0lOIGluIHRoZSBmcm9udCBvbiB0aGUgZm9ybVxuICAgICAgLy93aGF0ZXZlciB5b3UgbmVlZCBoZXIgdG8gc2V0IHRoZSBwZXJzb24gaW50byBhIHNvY2tldCBzZXNzaW9uIG9yIHdoYXRldmVyXG4gICAgICAvL3RoZSBzZXR0aW5nIG9mIHRoaXMudXNlcm5hbWUgaXMgaGFuZGxlZCBieSB2LW1vZGVsIGluIHRoZSBmcm9udCAtLSBpdCBpcyBkb3BlXG5cbiAgICAgIC8vYWZ0ZXIgYWxsIHRoZSBsb2dpY1xuICAgICAgdGhpcy5nZXRBY3RpdmVHYW1lcygpOyAvL3RoaXMgbWFrZXMgdGhlIGNhbGwgdG8gcHVsbCBnYW1lcyBmb3IgdGhlIGdhbWUgdmlld1xuICAgICAgdGhpcy5zY3JlZW4gPSAncGlja0dhbWUnOyAvL3N3YXBzIGl0IHRvIHRoZSBwaWNrIGEgZ2FtZSB2aWV3XG5cbiAgICB9LFxuICAgIHNob3dHYW1lRm9ybTogZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgIGlmICh0aGlzLnNob3dBZGRHYW1lRm9ybSA9PT0gZmFsc2UpXG4gICAgICAgIHRoaXMuc2hvd0FkZEdhbWVGb3JtID0gdHJ1ZTsgLy8gdGhpcyBpcyB0b2dnbGVkIHdpdGggdmlldyBjbGFzcyBzdHVmZi5cbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5zaG93QWRkR2FtZUZvcm0gPSBmYWxzZTtcbiAgICB9LFxuICAgIGNyZWF0ZUdhbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gc29tZSBzb3J0IG9mIGFqYXggb3Igd2hhdGV2ZXIgbWV0aG9kIHdlIG5lZWQgdG8gY3JlYXRlIGdhbWUgLy9cbiAgICAgIC8vIGFkZGluZyBzb21lIHN0dWIgdGhhdCB0aGVuIHVwZGF0ZXMgd2l0aCB0aGUgZ2FtZSB5b3UgY3JlYXRlZCAvL1xuICAgICAgLy8gYWRkIGl0IG9uIHJldHVybiB0byB0aGUgcG9zc2libGVHYW1lcyBhcnJheSBiYXNpY2FsbHkgcG9wcyBpdCBpbnRvIHRoZSBhdmFpbGFibGUgbGlzdCAvL1xuICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZSBHYW1lIGZpcmluZycpO1xuXG4gICAgICB2YXIgdGVtcE5ld0dhbWUgPSB7XG4gICAgICAgICduYW1lJzogdGhpcy5uZXdHYW1lTmFtZSxcbiAgICAgICAgJ2NyZWF0b3InOiB0aGlzLnVzZXJuYW1lLCBcbiAgICAgICAgJ2dhbWVJZCc6IDIzOSxcbiAgICAgICAgJ251bWJlck9mUGxheWVycyc6IDFcbiAgICAgIH07XG5cbiAgICAgIHRoaXMubmV3R2FtZU9iaiA9IHRlbXBOZXdHYW1lO1xuXG4gICAgICB0aGlzLmF2YWlsYWJsZUdhbWVzLnVuc2hpZnQodGVtcE5ld0dhbWUpOyAvLyB0aGlzIHNob3VsZCBiZSBkb25lIG9uIGEgcmV0dXJuIGFmdGVyIGNyZWF0aW9uIC0tIGlmIHlvdSB3YW5uYSBqdXN0IHJlbG9hZCBpdCB0b28gd2UgY2FuIGRvIHRoYXQuIG5vdCBzdXJlIHdoYXQgd29ya3MgYmVzdCBvbiB5b3VyIGVuZC4gXG4gICAgfSxcbiAgICAvLy8gc3RhcnRpbmcgZ2FtZSBtZXRob2RzIC8vL1xuICAgIGdldEFjdGl2ZUdhbWVzOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vdGhpcyBpcyB3aGVyZSB5b3UgcGx1ZyBpbiBhamF4IG9yIHdoYXRldmVyIGdldHMgYWxsIHRoZSBjdXJyZW50bHkgam9pbmFibGUgZ2FtZXNcbiAgICAgIC8vcmV0dXJuaW5nIGNyYXAgZm9yIHJlbmRlcmluZ1xuXG4gICAgICB2YXIgZ2FtZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAnbmFtZSc6ICdUZXN0IEdhbWUgMScsXG4gICAgICAgICAgJ251bWJlck9mUGxheWVycyc6IDIsXG4gICAgICAgICAgJ2NyZWF0b3InOiAnVGVzdFBlcnNvbicsXG4gICAgICAgICAgJ2dhbWVJZCc6IDIzNCxcbiAgICAgICAgICAnZGVjayc6ICdkZWZhdWx0JyAgLy8gaSBhc3N1bWUgaXQnbGwgYmUgc29tZXRoaW5nIGxpa2UgdGhpcyB0byBhY3R1YWxseSBsaW5rLCBhZGp1c3QgaG93ZXZlclxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ25hbWUnOiAnVGVzdCBHYW1lIDInLFxuICAgICAgICAgICdudW1iZXJPZlBsYXllcnMnOiAxLCBcbiAgICAgICAgICAnY3JlYXRvcic6ICdBbm90aGVyUGVyc29uJyxcbiAgICAgICAgICAnZ2FtZUlkJzogMjM1LFxuICAgICAgICAgICdkZWNrJzogJ2RlZmF1bHQnICAvLyBpIGFzc3VtZSBpdCdsbCBiZSBzb21ldGhpbmcgbGlrZSB0aGlzIHRvIGFjdHVhbGx5IGxpbmssIGFkanVzdCBob3dldmVyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAnbmFtZSc6ICdUZXN0IEdhbWUgMycsXG4gICAgICAgICAgJ251bWJlck9mUGxheWVycyc6IDEsIFxuICAgICAgICAgICdjcmVhdG9yJzogJ0hhZmYnLFxuICAgICAgICAgICdnYW1lSWQnOiAyMzgsXG4gICAgICAgICAgJ2RlY2snOiAnZGVmYXVsdCcgLy8gaSBhc3N1bWUgaXQnbGwgYmUgc29tZXRoaW5nIGxpa2UgdGhpcyB0byBhY3R1YWxseSBsaW5rLCBhZGp1c3QgaG93ZXZlclxuICAgICAgICB9XG4gICAgICBdO1xuXG4gICAgICAvLyBeIHRoaXMgaXMgYWxsIHN0dWZmIHRoYXQgc2hvdWxkIGJlIGNvbWluZyBpbiB0aHJvdWdoIGFqYXggb3Igd2hhdGV2ZXIgZ2V0cyBpdCBoZXJlLlxuXG4gICAgICB0aGlzLmF2YWlsYWJsZUdhbWVzID0gZ2FtZXM7XG4gICAgfSxcblxuICAgIGNob29zZUdhbWU6IGZ1bmN0aW9uKGdhbWVJZCkge1xuICAgICAgY29uc29sZS5sb2coJ2FwcC5jaG9vc2VHYW1lIGZpcmluZycsIGdhbWVJZCk7XG4gICAgfVxuXG4gIH1cbn0pLiRtb3VudCgnI2FwcCcpO1xuXG5cbiJdfQ==
