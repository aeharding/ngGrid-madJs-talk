// Code goes here
angular.module('app', []);

angular.module('app').directive('myWickedButton', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'my-wicked-button.partial.html',
    controller: function($element) {
      this.element = $element;
      
      return this;
    },
    scope: {},
    link: function(scope, element, attrs) {
      console.log('intialized My WICKED BUTTON!!');
    }
  }
})

.directive('myWickedHint', function() {
  return {
    restrict: 'E',
    require: '^myWickedButton',
    scope: {},
    link: function(scope, element, attrs, myWickedButtonCtrl) {
      console.log('my wicked button loaded!')
      
      // hint is contents of multi-transclude area for hint
      
      var drop = new Drop({
        target: myWickedButtonCtrl.element[0],
        content: element[0],
        classes: 'drop-theme-arrows-bounce-dark',
        position: 'bottom left',
        constrainToScrollParent: false,
        openOn: 'hover'
      });
    }
  }
});