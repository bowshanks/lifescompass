angular.module('lifescompass').controller('mainCtrl',function($scope, $location){
  $scope.scrollTo = function (anchor) {
    $location.hash(anchor);
  }
});
