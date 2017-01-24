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
		self.gif = false;
		// Variável que detem a informação do css do box que exibe as mensagem de falha ou sucesso;
		self.varAlert = {
				"alert":true,
				"alert-success":true,
				"alert-danger":false
			};
		// Exibe o alert ou não;
		self.exibeAlert = false;

		// Mensagem
		self.msg = "";

		// troca o css do box que exibe as mensagem de falha ou sucesso;

		funcAlert = function(ref,exibeAlert){
			self.varAlert = {
				"alert":true,
				"alert-success":ref,
				"alert-danger":!ref
			};
			self.exibeAlert = exibeAlert;
		}


		var exibeGif = function(){
			self.gif = !self.gif;
		}

		self.autenticar = function(){

			if ( self.user.nome.length >=8 && self.user.senha.length >= 6) {
				var request = {
					usuario: self.user.nome,
					senha : self.user.senha
				}
				var config = {
					timeout:10000
				};

				exibeGif();
				$http.post("http://192.168.1.9:8000/contaJusta-App/backend/login.php",request,config)
				.then(
					function(response){
						var status  = response.data.status;
						if (status == "sucesso") {
							funcAlert(true,true);
						}else{
							funcAlert(false,true);
						}
						self.msg = response.data.msg;
						

					},function(errResponse){
						self.mensagem = "Erro ao se comunicar com o servidor.";
						funcAlert(false,true);
					}

					);
				exibeGif();
				

			}
			
		}

	}]);