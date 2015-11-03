(function() {
  'use strict';

  angular
    .module('tip001.module')
    .controller('tip001Controller', [tip001Controller]);

  function tip001Controller(){
    var self = this;
    self.alertBtns = ['one', 'two'];
    self.pressBtn = pressBtn;

    /////////////////

    function pressBtn(index) {
      alert("Hello from button " + index + "!");
    }

  }

})();
