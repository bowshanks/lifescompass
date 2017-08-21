angular.module('lifescompass').controller('homeCtrl',function($scope, $location){
  $scope.scrollTo = function (anchor) {
    $location.hash(anchor);
  }
});
