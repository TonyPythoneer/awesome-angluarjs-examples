(function() {
    'use strict';

    angular
        .module('tip001.module')
        .directive('nameDirective', [nameDirective]);

    function nameDirective(){
    var directive = {
        templateUrl: './path/to/name.directive.html',
        scope:{},  //Isolated Scope
        transclude: true,
        restrict: 'E'
        //controller: MainMenuConteroller,
        //controllerAs: 'ctrl'
    }

})();