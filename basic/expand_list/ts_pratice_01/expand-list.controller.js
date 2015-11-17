/// <reference path="./../../typings/angularjs/angular.d.ts" />
/// <reference path="./expand-list.module.ts" />
var expandlistApp;
(function (expandlistApp) {
    "use strict";
    var app = expandlistApp.getModule();
    var expandlistCtrl = (function () {
        function expandlistCtrl() {
            this.items = ['aaa', 'bbb', 'ccc'];
        }
        expandlistCtrl.prototype.propertiesdeleteTheItem = function (index) {
            this.items.splice(index, 1);
            //999
        };
        expandlistCtrl.prototype.addItem = function () {
            this.items.push(this.toaddItem);
            this.toaddItem = null;
        };
        expandlistCtrl.$inject = [];
        return expandlistCtrl;
    })();
    app.controller("expandlistCtrl", expandlistCtrl);
})(expandlistApp || (expandlistApp = {}));
