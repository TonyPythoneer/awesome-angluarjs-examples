(function() {
    'use strict';

    angular
        .module('githubApp')
        .factory('GithubApisFactory', GithubApisFactory);

    GithubApisFactory.$injector = ['$resource'];

    function GithubApisFactory($resource) {
        return $resource("https://api.github.com/users/:username/repos", {username:'@username'})
        /*
        var factory = {
            listRepoes: $resource("https://api.github.com/users/:user/repos", {username:'@username'}, {
                query: {
                    method: 'GET',
                    transformResponse: transformResponsefunc,
                    isArray: true
                }
            })
        }
        return factory

        ///

        function transformResponsefunc(data, headers) {
            var response = {}
            response.data = data;
            response.headers = headers();
            return response;
        }
        */
    }

})();