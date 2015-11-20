(function() {
    'use strict';

    angular
        .module('githubApp')
        .controller('GitHubApisController', GitHubApisController);

    GitHubApisController.$injector = [];

    function GitHubApisController(GithubApisFactory){
        var self = this;
        self.myRepoes = GithubApisFactory.query({username: "TonyPythoneer"});
        console.log(self.myRepoes);

        self.myRepoes = GithubApisFactory.query({username: "TonyPythoneer"}, function(res, headers){
            var _headers = headers();
            console.log("%s / %s", _headers["x-ratelimit-remaining"], _headers["x-ratelimit-limit"]);
        }, function(){
            console.log("error");
        });

        console.log(self.myRepoes)


        function function_name (argument) {
            // body...
        }
    }

})();
