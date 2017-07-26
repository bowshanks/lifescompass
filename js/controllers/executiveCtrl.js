angular.module('lifescompass').controller('executiveCtrl',function($scope, $location){
  $scope.scrollTo = function (anchor) {
    $location.hash(anchor);
  }
});
