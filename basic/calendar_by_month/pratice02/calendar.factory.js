(function() {
    'use strict';

    angular
        .module('calendar')
        .factory('CalendarFactory', CalendarFactory);

    CalendarFactory.$injector = [];

    function CalendarFactory(){
        var theNow = new Date();
        var isNow = true;
        var _year = theNow.getFullYear();
        var _month = theNow.getMonth();

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
            var calendarArray = getCalendarArray();
            var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            for (var tableRowIndex = 0; tableRowIndex < calendarArray.length; tableRowIndex++) {
                var theTableRow = calendarArray[tableRowIndex];
                tableDate += '<tr>';
                for (var tableCellIndex = 0; tableCellIndex < theTableRow.length; tableCellIndex++) {
                    tableDate += theTableRow[tableCellIndex];
                }
                tableDate += '</tr>';
            }

            return tableDate
        }

        function getCalendarHead() {
            var monthName = new Date(_year, _month).toLocaleString("en-us", { month: "long" });
            return "<tr><th colspan='7'>" + monthName.toUpperCase() + " " + _year + "</th></tr>"
        }

        function getCalendarArray() {
            var calendarArray = [];
            var weekArray = new Array();

            var lastMonthDate = new Date(_year, _month, 0).getDate();
            var thisMonthDate = new Date(_year, _month + 1, 0).getDate();

            // check isNow
            if (theNow.getFullYear() === _year && theNow.getMonth() === _month){
                isNow = true;
            }else{
                isNow = false;
            }

            // Fill last month
            for (var date = lastMonthDate; new Date(_year, _month - 1, date).getDay() !== 6; date--){
                weekArray[new Date(_year, _month - 1, date).getDay()] = "<td class='last-month'>" + date + "</td>";
            }

            // Fill this month
            for (var date = 1; date <= thisMonthDate; date++) {
                var weekday = new Date(_year, _month, date).getDay();

                // add now
                if (isNow && theNow.getDate() == date){
                    weekArray[weekday] = "<td class='this-month now'>" + date + "</td>";
                }else{
                    weekArray[weekday] = "<td class='this-month'>" + date + "</td>";
                }

                // push
                if (weekday === 6){
                    calendarArray.push(weekArray);
                    weekArray = new Array();
                }
            };

            // Fill next month
            for (var date = 1; new Date(_year, _month + 1, date).getDay() !== 0; date++)
                weekArray[new Date(_year, _month + 1, date).getDay()] = "<td class='next-month'>" + date + "</td>";

            if (weekArray.length === 7) calendarArray.push(weekArray);

            return calendarArray;
        }

    }

})();