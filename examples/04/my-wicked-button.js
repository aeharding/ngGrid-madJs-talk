// Code goes here
angular.module('app', []);

angular.module('app').directive('myWickedButton', function($http, $compile) {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'my-wicked-button.partial.html',
    scope: {
      hintIcon: '@',
      hint: '@'
    },
    link: function(scope, element, attrs) {
      console.log('intialized My WICKED BUTTON!!');
      
      // hint is contents of multi-transclude area for hint
      
      $http.get('my-wicked-hint.partial.html').then(function(data) {
        var hintTemplate = data.data;
        
        var hintContent = $compile(hintTemplate)(scope);
      
        if (attrs.hint) {
          var drop = new Drop({
            target: element[0],
            content: hintContent[0],
            classes: 'drop-theme-arrows-bounce-dark',
            position: 'bottom left',
            constrainToScrollParent: false,
            openOn: 'hover'
          });
        }
      })
      
      
      
    }
  }
});