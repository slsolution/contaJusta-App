	var login = angular.module('login',[]);

	login.config(['$httpProvider',function($httpProvider){
		// Todo dado de post passa a ter o formato jQuery
		$httpProvider.defaults.transformRequest.push(
				function(data){
					var requestStr;
					if (data) {
						data = JSON.parse(data);
						for(var key  in data){
							if (requestStr) {
								requestStr += '&' + key + '=' + data[key];
							}else{
								requestStr = key + '=' + data[key];
							}
						}
					}
					return requestStr;
				}
			);
		// Configurando Content-Type;
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	}]);

	login.controller('ctrlLogin',['$http',function($http){
		var self = this;
		self.user = {};
		self.mensagem = "";

		self.autenticar = function(){

			if ( self.user.nome.length >=8 && self.user.senha.length >= 6) {
				var request = {
					usuario: self.user.nome,
					senha : self.user.senha
				}
				$http.post("http://192.168.1.9:8000/contaJusta-App/backend/login.php",request)
				.then(
					function(response){
						self.mensagem = response.data;
					},function(errResponse){
						self.mensagem = "Erro ao se comunicar com o servidor.";
					}

					);

			}
			
		}

	}]);