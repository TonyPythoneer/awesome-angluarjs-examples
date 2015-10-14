angular
  .module('expandlistApp', [])
  .controller('expandlistCtrl', [function(){
      var self = this

      self.items = ['aaa', 'bbb', 'ccc']

      self.deleteTheItem = function(index){
          self.items.splice(index, 1)
      };

      self.addItem = function(){
          self.items.push(self.toaddItem)
          self.toaddItem = null
      }
  }])