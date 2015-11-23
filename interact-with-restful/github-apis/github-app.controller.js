(function() {
    'use strict';

    angular
        .module('githubApp')
        .controller('GitHubApisController', GitHubApisController);

    GitHubApisController.$injector = ['$log', 'GithubApisFactory', 'GitHubApisService'];

    function GitHubApisController($log, GithubApisFactory, GitHubApisService){
        var self = this;
        var maxPage;
        self.author = "TonyPythoneer"
        self.enablePrevBtn = false;
        self.enableNextBtn = true;
        self.currentPage = 1;
        self.clickPreviousOrNextBtn = clickPreviousOrNextBtn;
        self.showTheItemsInRange = showTheItemsInRange;

        self.myRepoes = GithubApisFactory.query({username: self.author}, function(res, headers){
            var _headers = headers();
            maxPage = GitHubApisService.getMaxPage(self.myRepoes.length);
            //$log.info("%s / %s", _headers["x-ratelimit-remaining"], _headers["x-ratelimit-limit"]);
        }, function(){
            //$log.error("error");
        });

        ///

        function clickPreviousOrNextBtn(paging){
            var allowPageDown = paging === -1 && self.currentPage !== 1;
            var allowPageUp = paging === 1 && self.currentPage !== maxPage;
            //$log.debug(allowPageDown, allowPageUp);
            if (allowPageDown || allowPageUp){
                self.currentPage += paging;
                self.enablePrevBtn = (self.clickPreviousOrNextBtn === 1)? false: true;
                self.enableNextBtn = (self.clickPreviousOrNextBtn === maxPage)? false: true;
            }
        }

        function showTheItemsInRange(page, index){
            return (page-1)*10 <= index  && index < page*10
        }

    }

})();
