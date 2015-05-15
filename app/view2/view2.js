'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl as ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope) {
	$scope.namn = 'demas';
	//this.namn = 'mamma';
}]);