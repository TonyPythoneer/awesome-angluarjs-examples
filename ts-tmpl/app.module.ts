/// <reference path="./path/to/typings/angularjs/angular.d.ts"/>
module MyModule {
    "use strict";
    angular.module("myModule", ["ngRoute"]);
    export var getModule: () => ng.IModule = () => {
        return angular.module("myModule");
    }
}