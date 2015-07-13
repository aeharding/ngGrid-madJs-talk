angular.module('app').controller('MyalertsController', function($scope) {
  $scope.alertsArr = [{
    type: 'danger',
    message: 'You failed to do something',
    onResolve: function() {
      alert('closed by the user');
    }
  }, {
    type: 'primary',
    message: 'Everything worked out, somehow',
    onResolve: function() {
      alert('closed by the user');
    }
  }];
});