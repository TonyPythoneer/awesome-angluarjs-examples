/// <reference path="./../../typings/angularjs/angular.d.ts"/>
/// <reference path="./github-app.module.ts"/>

module githubApp {
    "use strict";
    var app = getModule();
    class GitHubApisController {
        private maxPage: number;

        public author: string = "TonyPythoneer";
        public enablePrevBtn: boolean = false;
        public enableNextBtn: boolean = true;
        public currentPage: number = 1;

        public myRepoes;
        public clickPrevOrNextBtn: (paging: number) => void;
        public showTheItemsInRange: (page: number, index: number) => boolean;
        public enablePrevOrNextBtn: (nameBtn: string) => { disabled: boolean };

        ///

        constructor($log, GithubApisFactory, GitHubApisService) {
            this.myRepoes = GithubApisFactory.query({ username: this.author }, (res, headers) =>{
                var _headers = headers();
                this.maxPage = GitHubApisService.getMaxPage(res.length);
                //$log.info("%s / %s", _headers["x-ratelimit-remaining"], _headers["x-ratelimit-limit"]);
            }, () => {
                $log.error("error");
            });

            this.clickPrevOrNextBtn = (paging: number) => {
                var allowPageDown = paging === -1 && this.currentPage !== 1;
                var allowPageUp = paging === 1 && this.currentPage !== this.maxPage;
                $log.debug(allowPageDown, allowPageUp);
                if (allowPageDown || allowPageUp) {
                    this.currentPage += paging;
                    this.enablePrevBtn = (this.currentPage === 1) ? false : true;
                    this.enableNextBtn = (this.currentPage === this.maxPage) ? false : true;
                }
            }

            this.showTheItemsInRange = (page: number, index: number) => {
                return (page - 1) * 10 <= index && index < page * 10;
            }

            this.enablePrevOrNextBtn = (nameBtn: string) => {
                if (nameBtn === 'prev') {
                    $log.debug({ disabled: this.enablePrevBtn });
                    return { disabled: this.enablePrevBtn }
                }
                if (nameBtn === 'next') {
                    $log.debug({ disabled: this.enableNextBtn });
                    return { disabled: this.enableNextBtn }
                }
            }
        }

        public static $inject: string[] = ['$log', 'GithubApisFactory', 'GitHubApisService'];
    }
    app.controller("GitHubApisController", GitHubApisController);
}