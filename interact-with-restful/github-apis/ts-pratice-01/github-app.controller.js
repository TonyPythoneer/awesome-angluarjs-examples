/// <reference path="./../../typings/angularjs/angular.d.ts"/>
/// <reference path="./github-app.module.ts"/>
var githubApp;
(function (githubApp) {
    "use strict";
    var app = githubApp.getModule();
    var GitHubApisController = (function () {
        ///
        function GitHubApisController($log, GithubApisFactory, GitHubApisService) {
            var _this = this;
            this.author = "TonyPythoneer";
            this.enablePrevBtn = false;
            this.enableNextBtn = true;
            this.currentPage = 1;
            this.myRepoes = GithubApisFactory.query({ username: this.author }, function (res, headers) {
                var _headers = headers();
                _this.maxPage = GitHubApisService.getMaxPage(res.length);
                $log.info("%s / %s", _headers["x-ratelimit-remaining"], _headers["x-ratelimit-limit"]);
            }, function () {
                $log.error("error");
            });
            ///
            this.clickPrevOrNextBtn = function (paging) {
                var allowPageDown = paging === -1 && _this.currentPage !== 1;
                var allowPageUp = paging === 1 && _this.currentPage !== _this.maxPage;
                $log.debug(allowPageDown, allowPageUp);
                if (allowPageDown || allowPageUp) {
                    _this.currentPage += paging;
                    _this.enablePrevBtn = (_this.currentPage === 1) ? false : true;
                    _this.enableNextBtn = (_this.currentPage === _this.maxPage) ? false : true;
                }
            };
            this.showTheItemsInRange = function (page, index) {
                return (page - 1) * 10 <= index && index < page * 10;
            };
            this.enablePrevOrNextBtn = function (nameBtn) {
                if (nameBtn === 'prev') {
                    $log.debug({ disabled: _this.enablePrevBtn });
                    return { disabled: _this.enablePrevBtn };
                }
                if (nameBtn === 'next') {
                    $log.debug({ disabled: _this.enableNextBtn });
                    return { disabled: _this.enableNextBtn };
                }
            };
        }
        GitHubApisController.$inject = ['$log', 'GithubApisFactory', 'GitHubApisService'];
        return GitHubApisController;
    })();
    app.controller("GitHubApisController", GitHubApisController);
})(githubApp || (githubApp = {}));
