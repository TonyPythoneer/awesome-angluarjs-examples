// Set application
(function() {
  'use strict';

  angular
    .module('tip002.module', []);

})();

// Get application - controller
(function() {
  'use strict';

  angular
    .module('tip002.module')
    .controller('tip002Controller', [tip002Controller]);

  function tip002Controller() {
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
    .module('tip002.module')
    .directive('parent', [parent]);

  function parent() {
    var directive = {
      restrict: 'E',
      controller: ParentController
    }

    return directive;

  }

})();


function ParentController(){
  this.calculate = function(){
    console.log(5+5);
  }
}


// Get application - directive - child
(function() {
  'use strict';

  angular
    .module('tip002.module')
    .directive('child', [child]);

  function child() {
    var directive = {
      restrict: 'E',
      scope: {},
      require: '^parent', //look on parent or the same node for controller
      template: '<button ng-click="clicked()">click me</button>',
      link: link
    };
    return directive;

    function link(scope, elm, attrs, tip002Controller){ //then inject it as parentCtrl
      scope.clicked = function(){
        tip002Controller.calculate();
      }
    }
  }
})();
