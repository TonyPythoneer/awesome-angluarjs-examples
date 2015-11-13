(function() {
    'use strict';

    angular
        .module('lvProgress')
        .controller('lvProgressController', [lvProgressController]);

    function lvProgressController(){
        var self = this;
        self.expPercentage = 0;
        self.animatedBar = {width: self.expPercentage + "%"};
        self.addValue = addValue;
        self.subValue = subValue;

        /////////////////

        function getAnimatedBar () {
            return {
                width: self.expPercentage + "%"
            }
        }

        function addValue () {
            self.expPercentage += 10;
            self.animatedBar = getAnimatedBar()
            console.log(self.animatedBar)
        }

        function subValue () {
            self.expPercentage -= 10;
            self.animatedBar = getAnimatedBar()
        }

    }

})();
