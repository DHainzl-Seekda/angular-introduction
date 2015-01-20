angular.module('root', [])
	.value ('message', 'Hello, Worlds')
	.controller('index', [ '$scope', 'message', function ($scope, message) {
		$scope.message = message;
	}]);