<?php
	include_once 'config.php';

	$usuario = isset($_POST['usuario'])?$_POST['usuario']:false;
	$senha = isset($_POST['senha'])?$_POST['senha']:false;

	if ($usuario && $senha) {
		$consulta = $conexao->consultar("SELECT * FROM usuario WHERE usuario = '$usuario' AND senha='$senha' ");
		if ($consulta) {
			$consulta['status'] = "sucesso";
			$consulta['msg'] = "Login efetuado com sucesso.";
			echo json_encode($consulta);
		}else{
			echo '{
						"status":"falha",
						"msg":"Usuário/senha está(ão) incorretos."
					}';
		}
	}else{
		echo '{
			"status":"falha",
			"msg":"Usuário ou senha está em branco."
		}';
	}

	$conexao->desconectar();
?>