angular.module('root', [])
	.controller('index', [ '$scope', function ($scope) {
		$scope.data = {
			factor: 6
		};
		$scope.product = $scope.data.factor * 2;
	}]);