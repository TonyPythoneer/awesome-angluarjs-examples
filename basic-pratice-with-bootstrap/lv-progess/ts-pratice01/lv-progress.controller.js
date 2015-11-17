/// <reference path="./../../typings/angularjs/angular.d.ts"/>
/// <reference path="./lv-progress.module.ts"/>
var lvProgressModule;
(function (lvProgressModule) {
    "use strict";
    var app = lvProgressModule.getModule();
    var lvProgressController = (function () {
        function lvProgressController($interval) {
            var _this = this;
            this.$interval = $interval;
            this.expPercentage = 0;
            this.level = 1;
            this.propertyHead = ['Property', 'Value'];
            this.properties = {
                'HP': 10,
                'Att': 10,
                'Def': 10,
                'S.Att': 10,
                'S.Def': 10,
                'S.Spd': 10
            };
            this.ClickClass = function () {
                return {
                    hidden: (_this.expPercentage) ? true : false
                };
            };
            this.addValue = function () {
                _this.expPercentage += 10;
                if (_this.expPercentage == 100) {
                    var audio = new Audio('./Pokemon_RGBY(GB)Level up.mp3');
                    audio.play();
                    _this.expPercentage = 0;
                    _this.LevelUp();
                }
                _this.animatedBar = _this.getAnimatedBar();
            };
            this.subValue = function () {
                _this.expPercentage -= 10;
                _this.animatedBar = _this.getAnimatedBar();
            };
            this.getAnimatedBar = function () {
                return {
                    width: _this.expPercentage + "%"
                };
            };
            this.LevelUp = function () {
                for (var property in _this.properties) {
                    var coefficient = Math.random() * 10;
                    var gainAbility = Math.round(coefficient);
                    _this.properties[property] += gainAbility;
                }
                _this.level += 1;
            };
            $interval(this.addValue, 100, 2 * 10);
        }
        lvProgressController.$inject = ["$interval"];
        return lvProgressController;
    })();
    app.controller("lvProgressController", lvProgressController);
})(lvProgressModule || (lvProgressModule = {}));
