(function() {
    'use strict';

    angular
        .module('selectCalendar', []);

})();


(function() {
    'use strict';

    angular
        .module('selectCalendar')
        .controller('calendarController', calendarController)

        calendarController.$injector = ['$scope'];

        function calendarController ($scope){
            var self = this;
            var targetMonth = null;
            var targetDay = null;
            var isTarge = false;

            var thirtyOneDays = new Array(31);
            thirtyOneDays[30] = 1;

            //property
            self.calendarLayout = getCalendarLayout();            
            self.thirtyOneDays = thirtyOneDays
            console.log(self.thirtyOneDays)

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
                isTarge = true;
                toggleCalendarClass(month, dayIndex, dayValue);
            }

            function endTargetCalendar(){
                isTarge = false;
            }          

            function toggleCalendarClass(month, dayIndex, dayValue){
                if (isTarge && dayValue != null){
                    self.calendarLayout[month][dayIndex] =  !dayValue;
                }
            }

        }


})();
