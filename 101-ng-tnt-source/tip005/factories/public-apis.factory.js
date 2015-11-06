(function() {
    'use strict';

    angular
        .module("tip005")
        .factory('PublicApisFactory', PublicApisFactory);

    PublicApisFactory.$injector = [];

    function PublicApisFactory() {
        var factory = {
            edit: edit,
            save: save,
            search: search,
            ok: ok,
            cancel: cancel
        };
        return factory;

        ///////////////

        function edit($state){
            return function (){
                if ($state.is("form.viewing")) $state.go("form.editing");
            }
        }

        function save($state, ctrl){
            //This is to mimic saving data to data source
            return function (){
                ctrl.srcdata = angular.copy(ctrl.data);
                if ($state.is("form.editing")) $state.go("form.viewing");
            }
        }

        function search($state){
            return function (){
                //In real application we would search data source here
                // and return the search result to the form
                if ($state.is("form.viewing")) $state.go("form.searching");
            }
        };

        function ok($state){
            return function (){
                if ($state.is("form.searching")) $state.go("form.viewing");
            }
        };

        function cancel($window){
            return function () {
                $window.history.back();
            }
        };

    }

})();
