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
      scope.slowScroll = 'translate(0px,'+ scope.scroll /10 +'%)';
      var windowEl = angular.element($window);
      var handler = function() {
        var elHeight = document.getElementById("quote").offsetHeight;
        scrollPercent = elHeight / 20;
        scope.scroll = $window.pageYOffset;
        scope.slowScroll = 'translate(0px,'+ scope.scroll / scrollPercent +'%)';
      }
      windowEl.on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
});
