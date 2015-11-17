/// <reference path="./../../typings/angularjs/angular.d.ts"/>
module lvProgressModule {
    "use strict";
    angular.module("lvProgress", []);
    export var getModule: () => ng.IModule = () => {
        return angular.module("lvProgress");
    }
}
