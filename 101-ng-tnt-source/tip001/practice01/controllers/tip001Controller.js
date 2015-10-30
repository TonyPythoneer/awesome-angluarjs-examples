(function() {
  'use strict';

  angular
    .module('tip001App')
    .controller('tip001Ctrl', [tip001Ctrl]);

  function tip001Ctrl(){
    var self = this;
    self.alertBtns = ['one', 'two'];
    self.pressBtn = pressBtn;

    /////////////////

    function pressBtn(index) {
      alert("Hello from button " + index + "!");
    }

  }

})();
