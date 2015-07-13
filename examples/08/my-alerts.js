angular.module('app').directive('myAlert', function() {
  return {
    controller: function() {
      return this;
    },
    link: function(scope, element, attrs, ctrl) {
      console.log('intialized my alert');
      
      ctrl.close = function() {
        element.remove();
      }
    }
  }
});