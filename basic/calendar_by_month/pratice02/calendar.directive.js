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
            element.append('<a href="#" class="prev">prev</a>');
            element.append('<a href="#" class="next">next</a>');
            element.append(CalendarFactory.getCalendarTable());

            var Btns = element.find('a').on('click', clickPrevOrNextBtn);

            //////

            function clickPrevOrNextBtn(event){
                var nameBtn = event.target.className;
                if (nameBtn === "prev"){
                    CalendarFactory.prevFunc();
                }else if(nameBtn === "next"){
                    CalendarFactory.nextFunc();
                }
                element.find('table').remove()
                element.append(CalendarFactory.getCalendarTable());
            }
        }
    }

})();
