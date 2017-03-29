var Vue = require('vue')
//hi

new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement('div', 'hi Im a view in Vue, why not call this backbone.js?')
  }
})
