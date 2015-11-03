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

        self.readBtn = readBtn;

        ////

        function readBtn(){
            self.output = self.input;
        }
    }

})();
