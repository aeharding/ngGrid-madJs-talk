// Code goes here
angular.module('app', ['multi-transclude']);

angular.module('app').directive('myWickedButton', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'my-wicked-button.partial.html',
    scope: {},
    link: function(scope, element, attrs) {
      console.log('intialized My WICKED BUTTON!!');
      
      // hint is contents of multi-transclude area for hint
      var hint = element[0].querySelector('.my-wicked-button-hint');
      
      if (hint.children.length) {
        var drop = new Drop({
          target: element[0],
          content: hint,
          classes: 'drop-theme-arrows-bounce-dark',
          position: 'bottom left',
          constrainToScrollParent: false,
          openOn: 'hover'
        });
      }
      
    }
  }
});