/// <reference path="./../../typings/angularjs/angular.d.ts" />

module expandlistApp {
    "use strict";
    angular.module("expandlistApp", []);
    export var getModule: () => ng.IModule = () => {
        return angular.module("expandlistApp");
    }
}