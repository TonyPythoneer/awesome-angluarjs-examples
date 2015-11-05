(function() {
    'use strict';

    angular
        .module('tip005')
        .config(configure);

    configure.$injector = ["$urlRouterProvider", "$stateProvider"];

    function configure ($urlRouterProvider, $stateProvider) {
        // body...
    }

})();
