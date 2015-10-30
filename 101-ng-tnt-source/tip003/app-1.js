// Set application
(function() {
  'use strict';

  angular
    .module('tip003App', []);

})();

// Get application - factory
(function() {
  'use strict';

  angular
    .module('tip003App')
    .factory('tip003factory', [tip003factory]);

    function tip003factory() {
        var _data = null;

        return {
            setData : function (data){
                _data = data;
            },
            getData : function (){
                return _data;
            }
        }
    }

})();


// Get application - directive - setState
(function() {
  'use strict';

  angular
    .module('tip003App')
    .directive('setState', ['tip003factory', setState]);

    function setState(tip003factory) {
      return {
        restrict: 'E',
        scope:{}, //isolated Scope
        template: '<button ng-click="setState()">setState</button>',
        controller: function($scope){
          $scope.setState = function(){
            tip003factory.setData("hello");
          }
        }
      }
    }

})();


// Get application - directive - getState
(function() {
  'use strict';

  angular
    .module('tip003App')
    .directive('getState', ['tip003factory', getState]);

    function getState(tip003factory) {
      return {
        restrict: 'E',
        scope: {}, //Isolated Scope
        template: '<button ng-click="getState()">getState</button><br/><span>{{data}}</span>',
        controller: function($scope){
          $scope.getState = function(){
            $scope.data = tip003factory.getData();
          }
        }
      }
    }

})();