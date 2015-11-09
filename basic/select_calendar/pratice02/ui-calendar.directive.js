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
            templateUrl: './ui-calendar.directive.html',
            scope:{},  //Isolated Scope
            transclude: true,
            restrict: 'E',
            //link: link,
            controller: calendarController,
            controllerAs: 'ctrl'
        };
        return directive;

        /////


        function calendarController(){
            var self = this;
            self.thirtyOneDays = 31
            var targetMonth = null;
            var targetDay = null;
            var isTarget = false;

            var thirtyOneDays = new Array(31);
            thirtyOneDays[30] = 1;

            //property
            self.calendarLayout = getCalendarLayout();
            self.thirtyOneDays = thirtyOneDays;

            //function
            self.startTargetCalendar = startTargetCalendar;
            self.endTargetCalendar = endTargetCalendar;
            self.toggleCalendarClass = toggleCalendarClass;

            //ng-class
            self.getCalendarClass = getCalendarClass;

            /////

            function getCalendarLayout(){
                var calendarLayout = {};
                var currentYear = new Date().getFullYear();

                for (var m = 1; m <= 12; m++) {
                    //
                    var objDate = new Date(currentYear, m, 0);
                    var monthName = objDate.toLocaleString("en-us", { month: "long" });

                    //
                    var days = objDate.getDate();
                    var daysLayout = [];
                    for (var fillDays = 1; fillDays <= days; fillDays++) daysLayout.push(false);
                    for (var fillSpaces = days+1; fillSpaces <= 31; fillSpaces++) daysLayout.push(null);

                    //
                    calendarLayout[monthName] = daysLayout;
                };

                return calendarLayout
            }

            function getCalendarClass(month, dayIndex, dayValue){
                if (dayValue == null){
                    return {
                        block: true
                    };
                }
                var monthClass = {}
                monthClass[month] = dayValue
                return monthClass
            }

            function startTargetCalendar(month, dayIndex, dayValue){
                isTarget = true;
                toggleCalendarClass(month, dayIndex, dayValue);
            }

            function endTargetCalendar(){
                isTarget = false;
            }

            function toggleCalendarClass(month, dayIndex, dayValue){
                if (isTarget && dayValue != null){
                    self.calendarLayout[month][dayIndex] =  !dayValue;
                }
            }
        };
    }

})();
