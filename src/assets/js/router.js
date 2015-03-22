app.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.
			when('/sample', {
				controller: 'SampleCtrl',
				templateUrl: 'partials/sample.html'
			});
	}
]);