(function() {
    'use strict';

    angular
        .module('selectCalendar', []);

})();


(function() {
    'use strict';

    angular
        .module('selectCalendar')
        .directive('uiCalendar', uiCalendar);

    uiCalendar.$injector = [];

    function uiCalendar(){
        var directive = {
            scope:{},  //Isolated Scope
            transclude: true,
            restrict: 'AE',
            //link: link,
            controller: calendarController,
            controllerAs: 'ctrl'
            templateUrl: './ui-calendar.directive.test.html',
        };
        return directive;

        /////

        function calendarController(){
            var self = this;
            self.aaa = 999;
        };
    }

})();
