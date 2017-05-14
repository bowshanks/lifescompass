angular.module('lifescompass').directive('headerDir', function($window) {
  return {
    templateUrl: './js/directives/templates/header.html',
    link: function(scope, element, attrs) {
      scope.scroll = 0;
      scope.height = $window.innerHeight - 100;
      var transparancy = 0.7
      scope.bgCol = 'rgba(180,235,253, '+ transparancy +')';
      var windowEl = angular.element($window);
      var handler = function() {
        scope.scroll = $window.pageYOffset;
        transparancy = (scope.scroll/scope.height) + 0.7;
        scope.bgCol = 'rgba(180,235,253, '+ transparancy +')';
      }
      windowEl.on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
});
