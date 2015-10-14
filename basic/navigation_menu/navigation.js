angular
  .module('navigationApp', [])
  .controller('navigationBar', [function(){
    var self = this;

    self.showMsg = false;

    self.items = [
      {label: 'HOME', clicked: false},
      {label: 'PROJECTS', clicked: false},
      {label: 'SERVICES', clicked: false},
      {label: 'CONTACT', clicked: false},
    ];

    self.triggerButton = function(label){
      for (var i = 0; i < self.items.length; i++) {
        if (self.items[i].label == label){
          self.items[i].clicked = true;
        }else{
          self.items[i].clicked = false;
        }
      }
      self.clickedLabel = label;
      self.showMsg = true;
    };

    self.getClickedClass = function(status) {
      return {
        clickActive: status,
        clickInactive: !status,
      };
    };
  }])