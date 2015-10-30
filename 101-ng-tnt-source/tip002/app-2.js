// Set application
(function() {
  'use strict';

  angular
    .module('tip002App', []);

})();

// Get application - controller
(function() {
  'use strict';

  angular
    .module('tip002App')
    .controller('tip002Ctrl', [tip002Ctrl]);

    function tip002Ctrl() {
        var self = this;

        self.readBtn = readBtn;

        ////

        function readBtn(){
            self.output = self.input;
        }
    }

})();
