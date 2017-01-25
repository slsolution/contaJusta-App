	app.controller('ctrlCadastro',['$http',function($http){

		var self = this;
		self.wait = false;
		self.cadastrando = false;
		self.usuarioValido = false;
		self.dados = {};
		// Classes css do alert
		self.varAlert = {
				"alert":true,
				"alert-success":true,
				"alert-danger":false
			};

		// Mensagem
		self.msg = "";

		// Exibe o alert ou não;
		self.exibeAlert = false;

		// troca o css do box que exibe as mensagem de falha ou sucesso;

		funcAlert = function(ref,exibeAlert){
			self.varAlert = {
				"alert":true,
				"alert-success":ref,
				"alert-danger":!ref
			};
			self.exibeAlert = exibeAlert;
		};

		self.cadastrar = function(){

			self.cadastrando = true;
			// Fazer requisição;
			requisitar();				
		};

		var requisitar = function(){
				var request = {
					usuario: self.dados.usuario,
					senha: self.dados.senha,
					nome: self.dados.nome,
					email: self.dados.email,
				};
				var config = {
					timeout:10000
				};

			return $http.post("http://servicos.slsolution.com.br/contaJusta/cadastrarUsuario.php",request,config)
			.then(
				function(response){
					var status  = response.data.status;
					console.log(response.data);
					if (status == "sucesso") {
						funcAlert(true,true);
					}else{
						funcAlert(false,true);
					}
					self.msg = response.data.msg;
					self.cadastrando = false;
					setTimeout(function(){ location.href="#!/"; }, 2000);

					

				},function(errResponse){
					self.msg = "Erro ao se comunicar com o servidor.";
					funcAlert(false,true);
					self.cadastrando = false;

				}

				);
			};




		self.existeUsuario = function(){
			self.wait = true;
			if (typeof self.dados.usuario != "undefined") {
				if (self.dados.usuario.length != 0) {
					requestExisteUsuario();
				}
			}
		};

		var requestExisteUsuario = function(){

			var request = {
				usuario: self.dados.usuario
			};
			var config = {
				timeout:10000
			};
			console.log(request);
			$http.post("http://servicos.slsolution.com.br/contaJusta/consultaUsuario.php",request,config).then(
					function(response){
						self.wait = false;
						self.usuarioValido = !response.data.existe;
					},function(errResponse){
						console.log("Ops..");
						self.wait = false;
					}
				);
		};

		self.undefined = function(data){
			return typeof data == "undefined";
		};





	}])