(function() {
    'use strict';

    angular
        .module('githubApp')
        .service('GitHubApisService', GitHubApisService);

    function GitHubApisService() {
        var self = this;
        self.getMaxPage = getMaxPage;

        ///

        function getMaxPage(itemNum){
            var q = Math.floor(itemNum / 10);
            var r = itemNum % 10;
            return (r>0)? q+1:q
        }

    }

})();