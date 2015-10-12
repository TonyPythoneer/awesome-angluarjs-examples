angular
  .module('calculatorApp', [])
  .controller('calculatorPanel', [function() {
    // Local variables
    var self = this;
    var memory = 0;
    var initiation = true;

    self.monitor = 0;
    self.calculatorButtons = [[7, 8, 9, '/'],
                              [4, 5, 6, 'x'],
                              [1, 2, 3, '-'],
                              [0, '.', '=', '+', 'c']];

    // Define function
    var inputNumber = function(init, num){
      if (init){
        self.monitor = self.monitor * 10 + num;
      }else{
        self.monitor = num;
        initiation = false;
      }
    }

    var inputClear = function(){
      self.monitor = 0;
      initiation = true;
    }

    self.clickButton = function(input){
      if (parseInt(input) != NaN){
        inputNumber(initiation, input);
      }else{
        //inputOperation()
        //inputClear()
      }
    }
}]);
