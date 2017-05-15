angular.module('lifescompass').directive('quoteDir', function($window) {
  return {
    scope: {
      text: "@",
      source: "@"
    },
    templateUrl: './js/directives/templates/quote.html',
    link: function(scope, element, attrs) {

    }
  };
});
