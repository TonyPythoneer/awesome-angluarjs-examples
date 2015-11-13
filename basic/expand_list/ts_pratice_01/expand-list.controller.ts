/// <reference path="./../../typings/angularjs/angular.d.ts" />
/// <reference path="./expand-list.module.ts" />

module expandlistApp {
    "use strict";
    var app = getModule();
    class expandlistCtrl {
        items: string[] = ['aaa', 'bbb', 'ccc'];
        toaddItem: string;

        deleteTheItem(index: number) {
            this.items.splice(index, 1)
        }

        addItem() {
            this.items.push(this.toaddItem);
            this.toaddItem = null;
        }

        public static $inject: string[] = [];

    }
    app.controller("expandlistCtrl", expandlistCtrl);
}