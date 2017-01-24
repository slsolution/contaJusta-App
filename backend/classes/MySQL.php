<?php
	 /**
	 * 
	 */
	 class MySQL implements iDB{

	 	protected $log;
	 	protected $conexao;

	 	# SETTERS

	 	function __construct(){
	 		$this->log = new Log();
	 		$this->log->add("Objeto MySQL criado com sucesso.");
	 	}

	 	protected function setConexao(Mysqli $conexao){
	 		$this->conexao = $conexao;
	 	}


	 	protected function getConexao(){
	 		return $this->conexao;
	 	}

		function conectar($host,$user,$pass,$db,$port=false){
			if ($port) {
				$conexao = new  mysqli($host,$user,$pass,$db,$port);
			}else{
				$conexao =  new  mysqli($host,$user,$pass,$db);
			}
			$this->log->add("Tentando criar conexao ao banco de dados.");
			if ($conexao) {

				$this->setConexao($conexao);
				$this->log->add("Conexão criada com sucesso.");
				return true;
			}else{
				$this->log->add("Erro ao criar conexão.");
				return false;
			}
		}

		function desconectar(){
			$conexao = $this->getConexao();
			if ($conexao) {
				$this->log->add("Conexão ao banco foi desfeita pelo usuario.");
				return $conexao->close();
			}else{
				return false;
			}
		}
		
		function consultar($query){
			$conexao = $this->getConexao();
			if ($conexao) {

				$this->log->add("Rodando query...");
				$result = $conexao->query($query);				

				if ($result) {
					if (is_object($result)) {
						$this->log->add("Query executada com sucesso [resultado é objeto].");
						

						$output = array();

						while ($dados = $result->fetch_array() ) {
							$output[] = $dados;	
						}

						return $output;
					}else{
						$this->log->add("Query executada com sucesso.");
						return true;
					}
				}else{
					$this->log->add("Falha ao executar query..");
					return false;
				}
				
			
			}else{
				return false;
			}
		}
		function log($x="\n"){
			$this->log->ver($x);
		}

		public static function getInstance(){
			return new MySQL();
		}

	 }

?>