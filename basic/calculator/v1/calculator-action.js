angular
  .module('calculatorApp', [])
  .controller('PanelCtrl', [function() {
    var self = this;
    var memory = 0;
    var input = false;

    self.monitor = 0;

    // Make number panels as the 1~9
    self.numberPanels = [[7,8,9], [4,5,6], [1,2,3], [0]];
    self.numberInput = function(num){
      if (input){
        self.monitor = self.monitor * 10 + num;
      }else{
        self.monitor = num;
        input = true;
      }
    }

    self.operationPanels = ['+', '-', '*', '/', '='];
    self.operationInput = function(op){
      if (!self.operation){
        console.log(self.monitor);
        memory = self.monitor;
      }else{
        if(input){
          memory = eval(memory + self.operation + self.monitor);
        }
      }
      //接著要撰寫第二個運算子，先初始化
      self.monitor = 0;
      input = false;
      //將新的OP儲存於暫存器
      self.operation = op ;

      //尋找bug專用段落
      console.log(memory);
      console.log(self.operation);

      //結算時，則消除暫存器
      //答案顯示於面板上
      if(op == "="){
        self.operation = "";
        self.monitor = memory;
      }
    }
}]);