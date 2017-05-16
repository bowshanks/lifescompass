angular.module('lifescompass').controller('careerCtrl',function($scope, $location){
  $scope.scrollTo = function (anchor) {
    $location.hash(anchor);
  }
});
