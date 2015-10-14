angular
  .module('orderformApp', [])
  .controller('orderformServices', [function(){
    var self = this;
    self.total = 0;

    function Item (label, price){
      return {
        label: label,
        price: price,
        active: false,
        getPrice: function(){
          isFloat = price % 1 != 0;
          if (!isFloat){
            return '$' + price.toString() + '.00';
          }else{
            return '$' + price.toString();
          }
        }
      };
    };

    self.items = [
      Item("Web Development", 300),
      Item("Design", 399.99),
      Item("Integration", 250),
      Item("Training", 220)
    ];

    self.selectTheItem = function(index){
      if (self.items[index].active){
        self.items[index].active = false;
        self.total -= self.items[index].price;
      }else{
        self.items[index].active = true;
        self.total += self.items[index].price;
      }
    };

    self.getSelectClass = function(active){
      return {
        selected: active,
        unselected: !active
      };
    };
  }])