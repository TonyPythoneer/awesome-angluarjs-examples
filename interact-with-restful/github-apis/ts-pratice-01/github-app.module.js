/// <reference path="./../../typings/angularjs/angular.d.ts"/>
var githubApp;
(function (githubApp) {
    "use strict";
    angular.module("githubApp", ["ngResource"]);
    githubApp.getModule = function () {
        return angular.module("githubApp");
    };
})(githubApp || (githubApp = {}));
