/// <reference path="./../../typings/angularjs/angular.d.ts" />
var expandlistApp;
(function (expandlistApp) {
    "use strict";
    angular.module("expandlistApp", []);
    expandlistApp.getModule = function () {
        return angular.module("expandlistApp");
    };
})(expandlistApp || (expandlistApp = {}));
