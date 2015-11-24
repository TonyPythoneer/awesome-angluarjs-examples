/// <reference path="./../../typings/angularjs/angular.d.ts"/>

module githubApp {
    "use strict";
    angular.module("githubApp", ["ngResource"]);
    export var getModule: () => ng.IModule = () => {
        return angular.module("githubApp");
    }
}