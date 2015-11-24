/// <reference path="./../../typings/angularjs/angular.d.ts"/>
/// <reference path="./github-app.module.ts"/>
var githubApp;
(function (githubApp) {
    "use strict";
    var app = githubApp.getModule();
    var GitHubApisService = (function () {
        function GitHubApisService() {
            this.getMaxPage = function (itemNum) {
                var q = Math.floor(itemNum / 10);
                var r = itemNum % 10;
                return (r > 0) ? q + 1 : q;
            };
        }
        GitHubApisService.$inject = [];
        return GitHubApisService;
    })();
    app.service("GitHubApisService", GitHubApisService);
})(githubApp || (githubApp = {}));
