	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/',{
			templateUrl : 'login.html',
			controller: 'ctrlLogin',
			controllerAs: 'ctrlL'
		})
		.when('/sobreNos',{
			templateUrl : 'sobreNos.html'
		})
		.when('/dev',{
			templateUrl : 'desenvolvedores.html'
		})
		.otherwise({
			redirectTo:'/'
		});
	}]);

	