<?php
	include_once 'config.php';

	$usuario = isset($_POST['usuario'])?$_POST['usuario']:false;


	if ($usuario) {
		$consulta = $conexao->consultar("SELECT * FROM usuario WHERE usuario = '$usuario'");
		if ($consulta) {
			echo '{
				"status":"sucesso",
				"existe":true
				}
			';
		}else{
			echo '{
						"status":"sucesso",
						"existe":false
					}';
		}
		$conexao->desconectar();
	}else{
		echo '{
			"status":"falha",
			"msg":"Usuário ou senha está em branco."
		}';
	}
	

	
?>