/// <reference path="./typings/angularjs/angular.d.ts" />
(function () {
    'use strict';
    angular
        .module('expandlistApp', []);
})();
(function () {
    'use strict';
    var expandlistCtrl = (function () {
        function expandlistCtrl() {
            this.items = ['aaa', 'bbb', 'ccc'];
        }
        expandlistCtrl.prototype.deleteTheItem = function (index) {
            this.items.splice(index, 1);
        };
        expandlistCtrl.prototype.addItem = function () {
            this.items.push(this.toaddItem);
            this.toaddItem = null;
        };
        return expandlistCtrl;
    })();
    angular
        .module('expandlistApp')
        .controller('expandlistCtrl', expandlistCtrl);
})();
