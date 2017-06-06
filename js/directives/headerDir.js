angular.module('lifescompass').directive('headerDir', function($window) {
  return {
    templateUrl: './js/directives/templates/header.html',
    link: function(scope, element, attrs) {
      scope.scroll = 0;
      var windowEl = angular.element($window);
      scope.headerDisplay = true;
      var handler = function() {
        scope.scroll = $window.pageYOffset;
        if (scope.scroll > 200) {
          scope.headerDisplay = false;
        }
        if (scope.scroll < 200) {
          scope.headerDisplay = true;
        }
      }
      windowEl.on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
});
