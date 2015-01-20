angular.module('root', [])
	.controller('index', [ '$scope', function ($scope) {
		$scope.data = {
			message: 'Hello, World!'
		};
	}]);