(function() {
    'use strict';

    angular
        .module('lvProgress')
        .controller('lvProgressController', lvProgressController);

    lvProgressController.$injector = ['$interval']

    function lvProgressController($interval){
        var self = this;
        self.expPercentage = 0;
        self.level = 1;
        self.propertyHead = ['Property', 'Value'];
        self.properties = {
            'HP': 10,
            'Att': 10,
            'Def': 10,
            'S.Att': 10,
            'S.Def': 10,
            'S.Spd': 10
        }
        self.addValue = addValue;
        self.subValue = subValue;
        self.ClickClass = ClickClass;

        /////////////////

        function getAnimatedBar () {
            return {
                width: self.expPercentage + "%"
            }
        }

        function ClickClass () {
            var hidden = (self.expPercentage <= 0)? true: false;
            return {
                hidden: hidden
            }
        }

        function addValue () {
            self.expPercentage += 10;
            if (self.expPercentage == 100){
                var audio = new Audio('./Pokemon_RGBY(GB)Level up.mp3');
                audio.play();
                self.expPercentage = 0;
                LevelUp();
            }
            self.animatedBar = getAnimatedBar()
        }

        function subValue () {
            self.expPercentage -= 10;
            self.animatedBar = getAnimatedBar()
        }

        function LevelUp () {
            for (var property in self.properties){
                var coefficient = Math.random() * 10;
                var gainAbility = Math.round(coefficient);
                self.properties[property] += gainAbility;
            }
            self.level += 1;
        }

        $interval(addValue, 100, 2*10);
    }

})();
