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
        var self = this;
        _data = null;

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
    .directive('setState', [setState]);

    function setState(tip003factory) {
      return {
        restrict: 'E',
        scope:{}, //isolated Scope
        template: '<button ng-click="setState()">setState</button>',
        controller: function($scope){
          var self = this;
          $scope.setState = function(){
            console.log(tip003factory);
            tip003factory.setData("hello");
            console.log("fuck!");
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
    .directive('getState', [getState]);

    function getState(tip003factory) {
      return {
        restrict: 'E',
        template: '<button ng-click="getState()">getState</button><br/><span>{{data}}</span>',
        controller: function(){
          var self = this;
          self.getState = function(){
            self.data = tip003factory.getState();
          }
        }
      }
    }

})();