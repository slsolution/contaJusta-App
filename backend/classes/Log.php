<?php 

	/**
	* 
	*/
	class Log {
		
		protected $lista;

		# SETTERS

		function setLista($lista){
			$this->lista = $lista;
		}

		# GETTERS 

		function getLista(){
			return $this->lista;
		}

		# Outros métodos

		protected function vazio(){

			$lista = $this->getLista();
			if ($lista) {
				return false;
			}else{
				return true;
			}
		}

		function add($mensagem){

			date_default_timezone_set('America/Sao_Paulo');

			$dataHora = date('d/m/Y H:i:s');

			$item = ['data_hora' => $dataHora, 'mensagem' => $mensagem];

			if ($this->vazio()) {
				$this->setLista([$item]);
			}else{

				$lista = $this->getLista();
				$this->setLista(array_merge([$item],$lista));
			}
		}

		function ver($quebraLinha='\n'){
			$lista  = $this->getLista();

			if ($lista) {
				$tam = count($lista);

				for ($i=0; $i < $tam; $i++) { 
					echo $lista[$i]['data_hora']." - ".$lista[$i]['mensagem']."$quebraLinha";
				}
			}else{
				echo "Sem logs. $quebraLinha";
			}
			
		}
		
	}

?>