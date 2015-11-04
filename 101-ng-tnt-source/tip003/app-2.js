// Set application
(function() {
    'use strict';

    angular
        .module('tip003.module', []);

})();

// Get application - controller
(function() {
    'use strict';

    angular
        .module('tip003.module')
        .controller('tip003Controller', [tip003Controller]);

    function tip003Controller() {
        var self = this;

        self.readBtn = readBtn;

        ////

        function readBtn(){
            self.output = self.input;
        }
    }

})();
