'use strict';

angular.module('myApp.testview', ['ngRoute', 'angular-table', 'ngSanitize', 'ngCsv'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/testview', {
    templateUrl: 'testview/testview.html',
    controller: 'TestViewCtrl'
  });
}])

.controller('TestViewCtrl', ['$scope','$http','$filter',function($scope, $http, $filter) {
    $scope.tests=[];
    $scope.filteredList =[];
    $http.get('data/blood_tests.json')
            .success(function(data) {
                $scope.tests = data;
                $scope.filteredList = $scope.tests;
            })
            .error(function(data,status,error,config){
                $scope.tests = [{heading:"Error",description:"Could not load json data"}];
            });
     $scope.config = {
        itemsPerPage: 5,
        maxPages: 5,
        fillLastPage: "no"
      };

      $scope.updateFilteredList = function() {
          $scope.filteredList = $filter("filter")($scope.tests, $scope.query);
        };
      $scope.splitString = function(data){
      return data.split(";");
      }
}]);