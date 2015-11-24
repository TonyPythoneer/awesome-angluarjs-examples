/// <reference path="./../../typings/angularjs/angular.d.ts"/>
/// <reference path="./github-app.module.ts"/>

module githubApp {
    "use strict";
    var app = getModule();
    class GitHubApisService {
        public getMaxPage: (itemNum: number) => number = (itemNum: number) => {
            var q: number = Math.floor(itemNum / 10);
            var r: number = itemNum % 10;
            return (r > 0) ? q + 1 : q;
        }
        public static $inject: string[] = [];
    }
    app.service("GitHubApisService", GitHubApisService);
}