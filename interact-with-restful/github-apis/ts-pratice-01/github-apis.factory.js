/// <reference path="./../../typings/angularjs/angular.d.ts"/>
/// <reference path="./../../typings/angularjs/angular-resource.d.ts"/>
/// <reference path="./github-app.module.ts"/>
var githubApp;
(function (githubApp) {
    "use strict";
    var app = githubApp.getModule();
    var GithubApisFactory = (function () {
        function GithubApisFactory($resource) {
            return $resource("https://api.github.com/users/:username/repos", { username: '@username' });
        }
        GithubApisFactory.$inject = ['$resource'];
        return GithubApisFactory;
    })();
    app.factory("GithubApisFactory", GithubApisFactory);
})(githubApp || (githubApp = {}));
