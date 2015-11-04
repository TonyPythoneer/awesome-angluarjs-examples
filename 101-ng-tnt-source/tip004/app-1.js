(function() {
    'use strict';

    angular
        .module('tip004.module', [])
})();


(function() {
    'use strict';

    angular
        .module('tip004.module')
        .controller('tip004Controller', tip004Controller)

    tip004Controller.$injector = ['$log'];

    function tip004Controller($log){
        var self = this;
        var num = 0
        self.range = range;
        self.sendInputField = sendInputField;
        self.clickTheField = clickTheField;

        ///////

        function range(first, last, step){
            step = step || 1;

            var list_ = [];

            for (var i = first; i < last; i+=step) list_.push(i);

            return list_;
        }

        function clickTheField(index){
            $log.log("message is sent to subscriber # %s", index)
        }

        function sendInputField(){
            $log.log("message is sent to subscriber # %s", 0)
            self.output = self.input;
        }

    }
})();