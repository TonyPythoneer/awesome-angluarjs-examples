(function() {
    'use strict';

    angular
        .module('tip005')
        .controller('Controller', Controller);

    var objectInjectors = ['$rootScope', '$state', '$window'];
    var fatoryInjectors = ['PublicApisFactory','SwitchFormModeFactory'];
    Controller.$injector = [].concat(objectInjectors, fatoryInjectors);

    function Controller($rootScope, $state, $window, PublicApisFactory, SwitchFormModeFactory){
        var self = this;

        init();
        setPublicAPIs();
        registerEventHandlers();

        ////

        function init() {
            var srcdata = {
                fullname: "Yaser Marey",
                address: "2 Adel St., Quesna, Menufeya",
                phonenumber: "00201234567890"
            };

            self.srcdata = angular.copy(srcdata);
            self.data = angular.copy(srcdata);
            self = SwitchFormModeFactory.showViewFrom(self);
            /*
            self.inputFields = [
                {value: 'Edit', api: PublicApisFactory.edit($state), showParam: self.canEdit},
                {value: 'Search', api: PublicApisFactory.save($state, self), showParam: self.canSearch},
                {value: 'Cancel', api: PublicApisFactory.search($state), showParam: self.canCancel},
                {value: 'Ok', api: PublicApisFactory.ok($state), showParam: self.canOk},
                {value: 'Save', api: PublicApisFactory.cancel($window), showParam: self.canSave}
            ]
            */
        }

        function setPublicAPIs() {
            self.edit = PublicApisFactory.edit($state);
            self.save = PublicApisFactory.save($state, self);
            self.search = PublicApisFactory.search($state);
            self.ok = PublicApisFactory.ok($state);
            self.cancel = PublicApisFactory.cancel($window);
        }

        function registerEventHandlers() {
            $rootScope.$on('$stateChangeSuccess', changeForm)

            function changeForm(event, toState, toParams, fromState, fromParams){
                if(toState.name == 'form.viewing'){
                    self.data = angular.copy(self.srcdata); // reset data to default, in real applications
                    self = SwitchFormModeFactory.showViewFrom(self);
                }
                else if(toState.name == 'form.editing'){
                    self = SwitchFormModeFactory.showEditFrom(self);
                }
                else if(toState.name == 'form.searching'){
                    self.data = {};  // clear all form data to allow user to enter
                                     // data to search with.
                    self = SwitchFormModeFactory.showSearchingFrom(self);
                }
            }
        }
    }
})();
