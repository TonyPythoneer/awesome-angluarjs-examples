/// <reference path="./path/to/typings/angularjs/angular.d.ts"/>
module MyModule {
    "use strict";
    var app = getModule();
    class MainController {
        private isAlive: boolean = false;
        private lastCheck: Date = new Date();
        constructor(private $interval: ng.IIntervalService) {
            var intervalFn = () => {
                this.isAlive = result;
                this.lastCheck = new Date();
            };
            $interval(intervalFn, 1000);
            intervalFn();
        }
        public static $inject: string[] = ["$interval"];
    }
    app.controller("mainCtrl", MainController);
}