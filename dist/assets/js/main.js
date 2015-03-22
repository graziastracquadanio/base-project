/* App Module */
var app = angular.module('baseproject', [
	'ngRoute'
]);

app.run(function ($rootScope) {
	
});

/**********************************************************/

// All directives go here

/**********************************************************/

// All filters go here

/**********************************************************/

app.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.
			when('/sample', {
				controller: 'SampleCtrl',
				templateUrl: 'partials/sample.html'
			});
	}
]);

/**********************************************************/

// All util functions go here

/**********************************************************/

app.controller('SampleCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

}]);