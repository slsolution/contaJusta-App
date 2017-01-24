	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/',{
			templateUrl : 'pages/login.html',
			controller: 'ctrlLogin',
			controllerAs: 'ctrlL'
		})
		.when('/sobreNos',{
			templateUrl : 'pages/sobreNos.html'
		})
		.when('/dev',{
			templateUrl : 'pages/desenvolvedores.html'
		})
		.otherwise({
			redirectTo:'/'
		});
	}]);

	