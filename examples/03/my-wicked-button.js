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
      
      // hint is contents of multi-transclude area for hint
      
      if (attrs.hint) {
        var drop = new Drop({
          target: element[0],
          content: attrs.hint,
          classes: 'drop-theme-arrows-bounce-dark',
          position: 'bottom left',
          constrainToScrollParent: false,
          openOn: 'hover'
        });
      }
      
    }
  }
});