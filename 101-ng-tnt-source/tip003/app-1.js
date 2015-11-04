// Set application
(function() {
    'use strict';

    angular
        .module('tip003.module', []);

})();

// Get application - factory
(function() {
    'use strict';

    angular
        .module('tip003.module')
        .factory('tip003Factory', [tip003Factory]);

    function tip003Factory() {
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


// Get application - directive - setState
(function() {
    'use strict';

    angular
        .module('tip003.module')
        .directive('setState', ['tip003Factory', setState]);

    function setState(tip003Factory) {
        var directive = {
            restrict: 'E',
            scope:{}, //isolated Scope
            template: '<button ng-click="setState()">setState</button>',
            controller: setStateController
        };
        return directive;
    }

})();


setStateController.$injector = ['$scope', 'tip003Factory'];

function setStateController($scope, tip003Factory){
    $scope.setState = function(){
        tip003Factory.setData("hello");
    }
}


// Get application - directive - getState
(function() {
  'use strict';

    angular
        .module('tip003.module')
        .directive('getState', ['tip003Factory', getState]);

    function getState(tip003Factory) {
        var directive = {
            restrict: 'E',
            scope: {}, //Isolated Scope
            template: '<button ng-click="getState()">getState</button><br/><span>{{data}}</span>',
            controller: getStateController
        }
        return directive;
    }

})();


setStateController.$injector = ['$scope', 'tip003Factory'];

function getStateController($scope, tip003Factory){
    $scope.getState = function(){
        $scope.data = tip003Factory.getData();
    }
}
