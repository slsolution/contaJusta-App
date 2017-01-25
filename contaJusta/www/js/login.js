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
		self.carregando = "Para prosseguir faça seu login.";
		// Variável que detem a informação do css do box que exibe as mensagem de falha ou sucesso;
		self.varAlert = {
				"alert":true,
				"alert-success":true,
				"alert-danger":false
			};

		self.redirect = function(url){
			location.href=url;
		};
		// Exibe o alert ou não;
		self.exibeAlert = false;

		// Mensagem de waiting..
		self.wait = false;

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

		self.autenticar = function(){
			self.wait = true;
			if ( self.user.nome.length >=8 && self.user.senha.length >= 6) {
				// Exibe imagem de "loading"			

				// Fazer requisição;
				requisitar();				
				
				// Retira imagem de "loading"

			}
		}

		var requisitar = function(){
			var request = {
					usuario: self.user.nome,
					senha : self.user.senha
				}
				var config = {
					timeout:10000
				};

			return $http.post("http://servicos.slsolution.com.br/contaJusta/login.php",request,config)
			.then(
				function(response){
					var status  = response.data.status;
					if (status == "sucesso") {
						funcAlert(true,true);

						setTimeout(function(){ location.href="pages/home.html"; }, 2000);
					}else{
						funcAlert(false,true);
					}
					self.msg = response.data.msg;
					self.wait = false;

					

				},function(errResponse){
					self.msg = "Erro ao se comunicar com o servidor.";
					funcAlert(false,true);
					self.wait = false;

				}

				);
			};

	}]);