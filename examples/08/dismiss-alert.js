angular.module('app').directive('dismissAlert', function() {
  return {
    restrict: 'E',
    require: '^myAlert',
    scope: {
      onResolve: '&'
    },
    link: function(scope, element, attrs, myAlertsController) {
      element.on('click', function() {
        scope.onResolve();
        myAlertsController.close();
      })
    }
  }
});