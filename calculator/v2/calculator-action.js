angular
  .module('calculatorApp', [])
  .controller('calculatorPanel', [function() {
    // Local variables
    var self = this;
    var memory = '0';
    var initiation = true;

    self.monitor = '0';
    self.calculatorButtons = [['7', '8', '9', '/'],
                              ['4', '5', '6', 'x'],
                              ['1', '2', '3', '-'],
                              ['0', '.', '=', '+', 'c']];

    // Define function
    var inputNumber = function(init, num){
      if (self.monitor != '0' || num != '0'){
        if (init){
          self.monitor = num;
          initiation = false;
        }else{
          self.monitor = self.monitor + num;
        }
      }
    }

    var inputOperation = function(op){
      if (self.operation){
        memory = eval(memory + self.operation + self.monitor)
        self.monitor = memory;
      }else{
        memory = self.monitor
      }
      self.operation = op;
      initiation = true;
    }

    var inputPoint = function(){
      self.monitor = self.monitor.toString();
      indexPoint = self.monitor.indexOf('.');
      if (!!~indexPoint){
        if (indexPoint == self.monitor.length-1){
          self.monitor = self.monitor.replace('.', '');
        }
      }else{
        self.monitor = self.monitor + '.';
      }
    }

    var inputClear = function(){
      self.monitor = '0';
      initiation = true;
    }

    self.clickButton = function(input){
      if (!isNaN(parseInt(input))){
        inputNumber(initiation, input);
      }else{
        if (!!~['+', '-', '*', '/'].indexOf(input)){
          inputOperation(input);
        }else if (input=='.'){
          inputPoint();
        }else if (input=='c'){
          inputClear();
        }
      }
      console.log(initiation);
    }
}]);
