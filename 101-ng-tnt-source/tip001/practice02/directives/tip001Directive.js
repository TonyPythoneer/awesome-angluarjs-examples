(function() {
  'use strict';

  angular
    .module('tip001App')
    .directive('alertBtn', [alertBtn]);

  function alertBtn(){
    return {
      templateUrl: './templates/alert_btn.html',
      restrict: 'E'
    }
  }

})();