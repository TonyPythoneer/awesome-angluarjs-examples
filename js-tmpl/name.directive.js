(function() {
    'use strict';

    angular
        .module('appName')
        .directive('nameDirective', [nameDirective]);

    function nameDirective(){
        var directive = {
            templateUrl: './path/to/name.directive.html',
            scope:{},  //Isolated Scope
            transclude: true,
            restrict: 'E',
            link: link
            //controller: MainMenuConteroller,
            //controllerAs: 'ctrl'
        }
        return directive

        /////

        function link(scope, element, attrs) {

        }
    }

})();