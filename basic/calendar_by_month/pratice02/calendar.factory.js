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
            getCalendarTable: getCalendarTable
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

        function getCalendarTable() {
            var tableHead = "<thead>" + getCalendarHead() + "</thead>"
            var tableBody = "<tbody>" + getCalendarWeek() + getCalendarDate() + "</tbody>"
            return "<table>" + tableHead + tableBody + "</table>"
        }

        /////

        function getCalendarWeek() {
            var tableWeek = ''
            var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            tableWeek += '<tr>';
            for (var weekIndex = 0; weekIndex < weekdays.length; weekIndex++)
                tableWeek += '<td>' + weekdays[weekIndex] + '</td>'
            tableWeek += '</tr>';

            return tableWeek
        }

        function getCalendarDate() {
            var tableDate = '';
            var calendarArray = getCalendarArray(_year, _month);
            var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            for (var tableRowIndex = 0; tableRowIndex < calendarArray.length; tableRowIndex++) {
                var theTableRow = calendarArray[tableRowIndex];
                tableDate += '<tr>';
                for (var tableCellIndex = 0; tableCellIndex < theTableRow.length; tableCellIndex++) {
                    tableDate += '<td>' + theTableRow[tableCellIndex]  + '</td>';
                }
                tableDate += '</tr>';
            }

            return tableDate
        }

        function getCalendarHead() {
            var monthName = new Date(_year, _month).toLocaleString("en-us", { month: "long" });
            return "<tr><th colspan='7'>" + monthName.toUpperCase() + " " + _year + "</th></tr>"
        }

        function getCalendarArray(theYear, theMonth) {
            var calendarArray = [];

            var lastMonthDate = new Date(theYear, theMonth, 0).getDate();
            var thisMonthDate = new Date(theYear, theMonth + 1, 0).getDate();

            var weekArray = new Array();
            // Fill last month
            for (var date = lastMonthDate; new Date(theYear, theMonth - 1, date).getDay() !== 6; date--)
                weekArray[new Date(theYear, theMonth - 1, date).getDay()] = date;

            // Fill this month
            for (var date = 1; date <= thisMonthDate; date++) {
                var weekday = new Date(theYear, theMonth, date).getDay();
                weekArray[weekday] = date;
                if (weekday === 6){
                    calendarArray.push(weekArray);
                    weekArray = new Array();
                }
            };

            // Fill next month
            for (var date = 1; new Date(theYear, theMonth + 1, date).getDay() !== 0; date++)
                weekArray[new Date(theYear, theMonth + 1, date).getDay()] = date;

            if (weekArray.length === 7) calendarArray.push(weekArray);

            return calendarArray;
        }

    }

})();