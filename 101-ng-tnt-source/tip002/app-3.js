// Set application
(function() {
  'use strict';

  angular
    .module('tip002App', []);

})();

// Get application - controller
(function() {
  'use strict';

  angular
    .module('tip002App')
    .controller('tip002Ctrl', [tip002Ctrl]);

    function tip002Ctrl() {
        var self = this;

        self.readBtn = readBtn;

        ////

        function readBtn(){
            self.output = self.input;
        }
    }

})();


// Get application - directive - parent
(function() {
  'use strict';

  angular
    .module('tip002App')
    .directive('parent', [parent]);

    function parent() {
      return {
        restrict: 'E',
        controller: function($scope){
          this.calculate = function(){
            console.log(5+5);
          }
        }
      }
    }

})();


// Get application - directive - child
(function() {
  'use strict';

  angular
    .module('tip002App')
    .directive('child', [child]);

    function child() {
      return {
        restrict: 'E',
        scope: {},
        require: '^parent', //look on parent or the same node for controller
        template: '<button ng-click="clicked()">click me</button>',
        link: function(scope, elm, attrs, tip002Ctrl){ //then inject it as parentCtrl
          scope.clicked = function(){
            tip002Ctrl.calculate();
          }
        }
      };
    }

})();
