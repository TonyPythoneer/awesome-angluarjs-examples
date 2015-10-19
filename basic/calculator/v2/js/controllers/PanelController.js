(function() {
  'use strict';

  angular
    .module('calculatorApp')
    .controller('calculatorPanel', [calculatorPanel]);

  function calculatorPanel() {
    // Local variables
    var self = this;
    var memory = '0';
    var initiation = true;

    self.monitor = '0';
    self.calculatorButtons = [['7', '8', '9', '/'],
                              ['4', '5', '6', '*'],
                              ['1', '2', '3', '-', 'ac'],
                              ['0', '.', '=', '+', 'c']];

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
        }else if (input=='='){
          inputEqual();
        }else if (input=='ac'){
          inputAllClear();
        }
      }
    }

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
      if (!!self.operation){
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
          if (self.monitor == '0'){
            initiation = true;
          }
        }
      }else{
        if (self.monitor == '0'){
          initiation = false;
        }
        self.monitor = self.monitor + '.';
      }
      console.log(initiation);
    }

    var inputClear = function(){
      self.monitor = '0';
      initiation = true;
    }

    var inputAllClear = function(){
      self.monitor = memory;
      self.operation = '';
      self.monitor = '0';
      memory = 0
      initiation = true;
    }

    var inputEqual = function(){
      memory = eval(memory + self.operation + self.monitor);
      self.monitor = memory;
      self.operation = '';
      initiation = true;
    }

  }
})();
