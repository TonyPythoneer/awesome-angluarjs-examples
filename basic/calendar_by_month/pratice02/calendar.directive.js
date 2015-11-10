(function() {
    'use strict';

    angular
        .module('calendar')
        .directive('theCalendar', theCalendar);

    theCalendar.$injector = ['CalendarFactory'];

    function theCalendar(CalendarFactory){
        var directive = {
            scope:{},  //Isolated Scope
            transclude: true,
            restrict: 'E',
            link: link
        }

        return directive

        /////
        function link(scope, element, attrs) {
            var prevBtn = '<a href="#" class="prev">prev</a>'
            var nextBtn = '<a href="#" class="next">next</a>'
            var calendarUI = CalendarFactory.getCalendarUI();

            element.append(prevBtn);
            element.append(nextBtn);
            element.append(calendarUI);

            var Btns = element.find('a').on('click', clickPrevOrNextBtn);

            ///

            function clickPrevOrNextBtn(event){
                var nameBtn = event.target.className;
                if (nameBtn === "prev"){
                    CalendarFactory.prevFunc();
                    element.find('table').remove()
                    element.append(CalendarFactory.getCalendarUI());
                }else if(nameBtn === "next"){
                    CalendarFactory.nextFunc();
                    element.find('table').remove()
                    element.append(CalendarFactory.getCalendarUI());
                }
            }
        }
    }

})();
