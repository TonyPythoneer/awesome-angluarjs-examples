(function() {
    'use strict';

    angular
        .module('nameApp')
        .factory('nameFactory', nameFactory);

    nameFactory.$injector = [];

    function nameFactory() {
        var _data = null;
        var factory = {
            setData: setData,
            getData: getData
        };
        return factory;

        ///////////////

        function setData(data){
            _data = data;
        }

        function getData(){
            return _data;
        }

    }

})();