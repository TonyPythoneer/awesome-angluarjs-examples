(function() {
    'use strict';

    angular
        .module('githubApp')
        .factory('GithubApisFactory', GithubApisFactory);

    GithubApisFactory.$injector = ['$resource'];

    function GithubApisFactory($resource) {
        return $resource("https://api.github.com/users/:username/repos", {username:'@username'})
    }

})();