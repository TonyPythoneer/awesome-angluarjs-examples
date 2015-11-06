(function() {
    'use strict';

    angular
        .module('tip006')
        .config(configure);

    configure.$injector = ["$urlRouterProvider", "$stateProvider"];

    function configure ($urlRouterProvider, $stateProvider) {
    $stateProvider
        .state('form',{
                   url: "/form",
                   abstract: true,
                   templateUrl: "./ui-views/form.ui-view.html",
                   controller: 'Controller as ctrl'
               })
        .state('form.viewing',{
                    url: "/viewing"
               })
        .state('form.editing',{
                    url: "/editing"
               })
        .state('form.searching',{
                    url: "/searching"
               });

        //Default route
        $urlRouterProvider.otherwise("/form/viewing");
    }

})();
