angular.module('lifescompass').directive('miniMenuDir', function($window) {
  return {
    scope: {
      text: "@",
      source: "@"
    },
    templateUrl: './js/directives/templates/miniMenu.html',
    link: function(scope, element, attrs) {

    }
  };
});
