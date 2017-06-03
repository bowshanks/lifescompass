angular.module('lifescompass').directive('quoteDir', function($window) {
  return {
    scope: {
      text: "@",
      source: "@"
    },
    templateUrl: './js/directives/templates/quote.html',
    link: function(scope, element, attrs) {
      scope.scroll = 0;
      scope.height = $window.innerHeight - 100;
      var transparancy = 0.8
      scope.slowScroll = 'translate(0px,'+ scope.scroll /10 +'%)';
      var windowEl = angular.element($window);
      var handler = function() {
        scope.scroll = $window.pageYOffset;
        transparancy = (scope.scroll/scope.height) + 0.7;
        scope.slowScroll = 'translate(0px,'+ scope.scroll /10 +'%)';
      }
      windowEl.on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
});
