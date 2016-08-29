const app = angular.module('PuppyClicker', []);
app.controller('CLickerController', ['$scope', function($scope){
  $scope.clicks = 0;
  $scope.handleClick = () => () $scope.clicks++;
}]);
