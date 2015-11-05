(function() {
    'use strict';

    angular
        .module('tip004', [])
})();


(function() {
    'use strict';

    angular
        .module('tip004')
        .controller('tip004Controller', tip004Controller)

    tip004Controller.$injector = ['$log'];

    function tip004Controller($log){
        var self = this;
        var num = 0;
        self.fields = range(0,2);
        self.sendInputField = sendInputField;
        self.clickTheField = clickTheField;

        ///////

        function range(first, last, step){
            step = step || 1;

            var list_ = [];

            for (var i = first; i < last; i+=step) list_.push({num: 0, val: '', checked: false});

            return list_;
        }

        function clickTheField(index){
            if (self.fields[index]['checked']){
                self.fields[index]['checked'] = false;
                $log.warn("subscriber # %s is removed", self.fields[index]['num'])
            }else{
                num++;
                self.fields[index]['num'] = num;
                self.fields[index]['checked'] = true;
                $log.log("message is sent to subscriber # %s", num)
            }
        }

        function sendInputField(){
            $log.log("message is sent to subscriber # %s", 0)
            self.output = self.input;
            for (var i = 0 ; i < self.fields.length; i++) {
                if (self.fields[i]['checked']) {
                    self.fields[i]['val'] = self.input;
                    $log.log("message is sent to subscriber # %s", self.fields[i]['num'])
                };
            };
        }

    }
})();