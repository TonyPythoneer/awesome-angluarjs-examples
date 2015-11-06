(function() {
    'use strict';

    angular
        .module("tip006")
        .factory('SwitchFormModeFactory', SwitchFormModeFactory);

    SwitchFormModeFactory.$injector = [];

    function SwitchFormModeFactory() {
        var factory = {
            showViewFrom: showViewFrom,
            showEditFrom: showEditFrom,
            showSearchingFrom: showSearchingFrom
        };
        return factory;

        ///////////////

        function initTheForm(){
            return {
                isReadOnly: false,
                canEdit: false,
                canCancel: false,
                canSave: false,
                canSearch: false,
                canOk: false
            }
        }

        function showViewFrom(ctrl){
            var showTheComponents = {
                isReadOnly: true,
                canEdit: true,
                canSearch: true
            }
            showTheComponents = angular.extend(initTheForm(), showTheComponents)
            return angular.extend(ctrl, showTheComponents);
        }

        function showEditFrom(ctrl){
            var showTheComponents = {
                canCancel: true,
                canSave: true
            }
            showTheComponents = angular.extend(initTheForm(), showTheComponents)
            return angular.extend(ctrl, showTheComponents);
        }

        function showSearchingFrom(ctrl){
            var showTheComponents = {
                canCancel: true,
                canOk: true
            }
            showTheComponents = angular.extend(initTheForm(), showTheComponents)
            return angular.extend(ctrl, showTheComponents);
        }

    }

})();
