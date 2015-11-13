/// <reference path="./path/to/typings/angularjs/angular.d.ts"/>
var MyModule;
(function (MyModule) {
    "use strict";
    angular.module("myModule", ["ngRoute"]);
    MyModule.getModule = function () {
        return angular.module("myModule");
    };
})(MyModule || (MyModule = {}));
