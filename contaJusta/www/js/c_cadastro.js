	app.controller('ctrlCadastro',['$http',function($http){

		var self = this;
		self.wait = false;
		self.usuarioValido = false;
		self.dados = {};



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






	}])