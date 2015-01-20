angular.module('myDirective', [])
	.directive('helloWorld', function() {
		return {
			restrict: 'E',
			templateUrl: 'helloWorld.html',
			controller: 'HelloWorldController'
		};
	})
	.controller('HelloWorldController', [ '$scope', function ($scope) {
		$scope.helloWorld = 'Hello, World!';
	}])
	// Workaround to make templates work locally
	.run(["$templateCache", function($templateCache) {
		$templateCache.put("helloWorld.html","<div>{{helloWorld}}</div>");
	}]);
