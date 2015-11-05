(function() {
    'use strict';

    angular
        .module('appName')
        .controller('Controller', [Controller]);

    function Controller(){
        var self = this;
        self.alertBtns = ['one', 'two'];
        self.pressBtn = pressBtn;

        /////////////////

        function function_name (argument) {
            // body...
        }
    }

})();
