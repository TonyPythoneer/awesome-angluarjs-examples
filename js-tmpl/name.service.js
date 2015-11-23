(function() {
    'use strict';

    angular
        .module('nameApp')
        .service('nameService', nameService);

    nameService.$injector = [];

    function nameService() {
        var self = this;
        self.f = f;

        ///

        function f(){
            //do something...
        }
    }
})();