var module = angular.module('root', []);

module.controller('index', [ '$scope', function ($scope) {
	$scope.message = 'Hello, World!';
}]);