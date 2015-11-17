/// <reference path="./path/to/typings/angularjs/angular.d.ts"/>
var MyModule;
(function (MyModule) {
    "use strict";
    var app = getModule();
    var MainController = (function () {
        function MainController($interval) {
            var _this = this;
            this.$interval = $interval;
            this.isAlive = false;
            this.lastCheck = new Date();
            var intervalFn = function () {
                _this.isAlive = result;
                _this.lastCheck = new Date();
            };
            $interval(intervalFn, 1000);
            intervalFn();
        }
        MainController.$inject = ["$interval"];
        return MainController;
    })();
    app.controller("mainCtrl", MainController);
})(MyModule || (MyModule = {}));
