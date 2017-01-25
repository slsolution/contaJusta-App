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
		.when('/cadastro',{
			templateUrl : 'pages/cadastro.html',
			controller:'ctrlCadastro',
			controllerAs: 'ctrlC'
		})
		.otherwise({
			redirectTo:'/'
		});
	}]);

	