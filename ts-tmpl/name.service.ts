/// <reference path="./path/to/typings/angularjs/angular.d.ts"/>
/// <reference path="./name.module.ts"/>

module MyModule {
    "use strict";
    var app = getModule();
    class nameService {
        public getMaxPage = function(itemNum: number): number {
            var q: number = Math.floor(itemNum / 10);
            var r: number = itemNum % 10;
            return (r > 0) ? q + 1 : q;
        }
        public static $inject: string[] = [];
    }
    app.service("nameService", nameService);
}