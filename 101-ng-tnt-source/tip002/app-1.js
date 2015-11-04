// Set application
(function() {
  'use strict';

  angular
    .module('tip002.module', []);

})();

// Get application - controller
(function() {
  'use strict';

  angular
    .module('tip002.module')
    .controller('tip002Controller', [tip002Controller]);

  function tip002Controller() {
      var self = this;

      self.labelBtn = "btn";

      self.range = range;

      self.readBtn = readBtn;

      ////

      function range(min, max, step){
          step = step || 1;
          var input = [];
          for (var i = min; i <= max; i++) input.push(i);
          return input;
      }

      function readBtn(num){
          self.spanWord = "user clicked "+ self.labelBtn + num + "! "
      }
  }

})();
