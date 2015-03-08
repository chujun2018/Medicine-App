'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope, $http) {
    $scope.tests='';
    $http.get('data/tests.json')
            .success(function(data) {
                $scope.tests=data;
            })
            .error(function(data,status,error,config){
                $scope.tests = [{heading:"Error",description:"Could not load json   data"}];
            });
}]);