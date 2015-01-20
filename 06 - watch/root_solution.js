angular.module('root', [])
	.controller('index', [ '$scope', function ($scope) {
		$scope.data = {
			factor: 6
		};

		function updateProduct () {
			$scope.product = $scope.data.factor * 2;
		}

		$scope.$watch(function () {
			return $scope.data.factor;
		}, updateProduct);
	}]);