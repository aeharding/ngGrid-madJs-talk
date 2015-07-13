// Code goes here
angular.module('app', []);

angular.module('app').directive('myWickedButton', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'my-wicked-button.partial.html',
    scope: {},
    link: function(scope, element, attrs) {
      console.log('intialized My WICKED BUTTON!!');
    }
  }
});