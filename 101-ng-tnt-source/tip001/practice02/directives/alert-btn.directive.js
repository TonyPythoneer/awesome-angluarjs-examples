(function() {
  'use strict';

  angular
    .module('tip001.module')
    .directive('alertBtn', [alertBtn]);

  function alertBtn(){
    return {
      templateUrl: './templates/alert_btn.html',
      restrict: 'E'
    }
  }

})();