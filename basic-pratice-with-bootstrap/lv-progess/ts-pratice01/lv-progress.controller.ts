/// <reference path="./../../typings/angularjs/angular.d.ts"/>
/// <reference path="./lv-progress.module.ts"/>

module lvProgressModule {
    "use strict";
    var app = getModule();
    class lvProgressController {
        public expPercentage: number = 0;
        public level: number = 1;
        public propertyHead: string[] = ['Property', 'Value'];
        public properties = {
            'HP': 10,
            'Att': 10,
            'Def': 10,
            'S.Att': 10,
            'S.Def': 10,
            'S.Spd': 10
        }
        public animatedBar: {width: string};

        public ClickClass = () => {
            return {
                hidden: (this.expPercentage) ? true : false
            }
        }

        public addValue: () => void = () => {
            this.expPercentage += 10;
            if (this.expPercentage == 100) {
                var audio = new Audio('./Pokemon_RGBY(GB)Level up.mp3');
                audio.play();
                this.expPercentage = 0;
                this.LevelUp();
            }
            this.animatedBar = this.getAnimatedBar()
        }

        public subValue: () => void = () => {
            this.expPercentage -= 10;
            this.animatedBar = this.getAnimatedBar()
        }

        constructor(private $interval: ng.IIntervalService) {
            $interval(this.addValue, 100, 2 * 10);
        }

        private getAnimatedBar = () => {
            return {
                width: this.expPercentage + "%"
            }
        }

        private LevelUp: () => void = () => {
            for (var property in this.properties) {
                var coefficient = Math.random() * 10;
                var gainAbility = Math.round(coefficient);
                this.properties[property] += gainAbility;
            }
            this.level += 1;
        }

        public static $inject: string[] = ["$interval"];
    }
    app.controller("lvProgressController", lvProgressController);
}