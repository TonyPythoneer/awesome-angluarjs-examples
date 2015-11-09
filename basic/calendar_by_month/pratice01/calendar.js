(function() {
    'use strict';

    angular
        .module('calendar', []);

})();


(function() {
    'use strict';

    angular
        .module('calendar')
        .controller('calendarController', calendarController);

    calendarController.$injector = [];

    function calendarController (){
        var self = this;

        //property
        self.theDate = new Date();
        self.currentYear = self.theDate.getFullYear();
        self.currentMonth = self.theDate.getMonth();
        self.calendarLayout = getCalendarLayout();
        self.calendarHeader = getCalendarHeader();
        self.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        ////

        function getCalendarLayout(){
            var calendarLayout = [];
            var totalDays = new Date(self.currentYear, self.currentMonth + 1, 0).getDate();
            var weekArray = new Array(7);
            for (var startDay = 1; startDay <= totalDays; startDay++) {
                var weekday = new Date(self.currentYear, self.currentMonth, startDay).getDay();
                weekArray[weekday] = startDay;
                if (weekday === 6){
                    calendarLayout.push(weekArray);
                    weekArray = new Array(7);
                }
            };
            if (weekday !== 6) calendarLayout.push(weekArray);

            return calendarLayout
        }

        function getCalendarHeader(){
            var objDate = new Date(self.currentYear, self.currentMonth);
            var monthName = objDate.toLocaleString("en-us", { month: "long" });
            return monthName + ' ' + self.currentYear;
        }

    }

})();
