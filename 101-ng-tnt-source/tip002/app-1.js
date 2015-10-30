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
