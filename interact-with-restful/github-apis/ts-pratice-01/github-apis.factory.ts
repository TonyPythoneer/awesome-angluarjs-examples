/// <reference path="./../../typings/angularjs/angular.d.ts"/>
/// <reference path="./../../typings/angularjs/angular-resource.d.ts"/>
/// <reference path="./github-app.module.ts"/>

module githubApp {
    "use strict";
    var app = getModule();
    class GithubApisFactory {
        constructor($resource: ng.resource.IResourceService) {
            return $resource("https://api.github.com/users/:username/repos", { username: '@username' })
        }
        public static $inject: string[] = ['$resource'];
    }
    app.factory("GithubApisFactory", GithubApisFactory);
}