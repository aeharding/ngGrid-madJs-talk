angular.module('app').directive('myAlerts', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'my-alerts.partial.html',
    scope: {
      alertsArr: '=val'
    },
    link: function(scope, element, attrs) {
      console.log('intialized my alerts');
    }
  }
})
.directive('myAlert', function() {
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