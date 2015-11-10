(function() {
    'use strict';

    angular
        .module('calendar')
        .factory('CalendarFactory', CalendarFactory);

    CalendarFactory.$injector = [];

    function CalendarFactory(){
        var theDate = new Date();
        var _year = theDate.getFullYear();
        var _month = theDate.getMonth();

        var factory = {
            prevFunc: prevFunc,
            nextFunc: nextFunc,
            getCalendarUI: getCalendarUI
        }

        return factory

        /////

        function prevFunc(){
            _month--;
            if (_month == 0){
                _year--;
                _month=12;
            }
        }

        function nextFunc(){
            _month++;
            if (_month == 12){
                _year++;
                _month=12;
            }
        }

        function getCalendarUI() {
            var calendarArray = getCalendarArray(_year, _month);

            var tableHTML = '';
            //tableHTML += '<a href="#" class="prev">prev</a>'
            //tableHTML += '<a href="#" class="next">next</a>'
            tableHTML += '<table>';
            for (var tableRowIndex = 0; tableRowIndex < calendarArray.length; tableRowIndex++) {
                var theTableRow = calendarArray[tableRowIndex];
                tableHTML += '<tr>';
                for (var tableCellIndex = 0; tableCellIndex < theTableRow.length; tableCellIndex++) {
                    tableHTML += '<td>' + theTableRow[tableCellIndex]  + '</td>';
                }
                tableHTML += '</tr>';
            }
            tableHTML += '</table>';

            return tableHTML
        }

        function getCalendarArray(theYear, theMonth) {
            var calendarArray = [];

            var lastMonthDate = new Date(theYear, theMonth, 0).getDate();
            var thisMonthDate = new Date(theYear, theMonth + 1, 0).getDate();

            var weekArray = new Array(7);
            // Fill last month
            for (var date = lastMonthDate; new Date(theYear, theMonth - 1, date).getDay() !== 6; date--)
                weekArray[new Date(theYear, theMonth - 1, date).getDay()] = date;

            // Fill this month
            for (var date = 1; date <= thisMonthDate; date++) {
                var weekday = new Date(theYear, theMonth, date).getDay();
                weekArray[weekday] = date;
                if (weekday === 6){
                    calendarArray.push(weekArray);
                    weekArray = new Array(7);
                }
            };

            // Fill next month
            for (var date = 1; new Date(theYear, theMonth + 1, date).getDay() !== 0; date++)
                weekArray[new Date(theYear, theMonth + 1, date).getDay()] = date;
            calendarArray.push(weekArray);

            return calendarArray;
        }

    }

})();