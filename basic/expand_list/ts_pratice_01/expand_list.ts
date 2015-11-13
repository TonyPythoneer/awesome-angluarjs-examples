/// <reference path="./../../typings/angularjs/angular.d.ts" />

(function() {
    'use strict';

    angular
        .module('expandlistApp', []);

})();


(function() {
    'use strict';

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
    }

    angular
        .module('expandlistApp')
        .controller('expandlistCtrl', expandlistCtrl);
})();

